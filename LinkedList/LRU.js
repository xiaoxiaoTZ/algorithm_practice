/**
 * LRU缓存淘汰策略(Least Recently Used 最近最少使用策略)
 * 实现思路：
 * 用单链表存储所有数据，越靠近链表尾部则越少使用，当有一个新的数据被访问时：
 * 1.如果这个数据在链表中，则将此节点从原位置移除，添加到链表头部
 * 2.如果这个数据不在链表中：
 *  1)如果链表的长度已经达到了规定的长度(缓存已满)
 *      删除链表尾部的节点，将新的数据插入到链表头部
 *  2)如果链表的长度没有达到规定的长度(缓存没满)
 *      直接将数据插入到链表头部
 * 
 * 时间复杂度为：O(n)
 * 
 * 具体代码实现如下:
 */

 var LinkedNode=function(val){
    this.val=val;
    this.next=null;
 }

//  length为缓存的最大长度
 var LRU=function(length){
     if(length<=0){return null;}
     //带头链表的指针(简化处理)
     this.head=new LinkedNode(null);
     this.length=length;
 }

LRU.prototype.appendNode=function(val){
        // prev用来记录前一个节点
        // h
    var prev=this.head,i=0,
        curr=this.head.next;
        // 记录链表首部的节点位置(不是空的那个带头节点)
        frist=this.head.next,
        len=this.length;
    while(curr){
        // 结点在链表中
        if(curr.val==val){
            // 删除对应节点的位置
            prev.next=curr.next;
            // 将节点插入到链表头部
            this.head.next=curr;
            curr.next=frist;
            return this.head.next;
        }
        i++;
        if(i<len){
            prev=prev.next;
        }
        curr=curr.next;
    }
    // 结点不在链表中
    // 1.如果当前链表长度已经为最长(缓存已满)，删除尾结点，将新结点插入到首部
    // 2.未超过链表长度，直接在首部插入
    var l=new LinkedNode(val);
    if(i==len){
        prev.next=null;
    }
    frist=this.head.next;
    this.head.next=l;
    l.next=frist;

    return this.head.next;
}