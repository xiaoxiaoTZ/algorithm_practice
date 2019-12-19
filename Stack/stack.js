// 基于数组实现的顺序栈
function Stack(num){
    this.num=num;
    this.count=0;
    // 数组的长度是固定的，所以需要设置count来记录栈中存在的数据
    this.arr=new Array(num)
}
Stack.prototype.push=function(str){
    var count=this.count;
    if(count==this.num){return false;}
    this.arr[count]=str;
    this.count++;
    return this.arr;
}
Stack.prototype.pop=function(){
    var count=this.count;
    if(count==0){return null;}
    var str=this.arr[count-1];
    // 此处是为了让栈中的数组相对容易理解，所以将出栈的项设置为undefined，
    // 其实完全不用设置，因为下次入栈的的时候对应项会被新入的项覆盖
    this.arr[count-1]=undefined;
    this.count--;
    return str;
}



// 链表的构造函数
function Linked(val){
    this.val=val;
    this.next=null;
}
// 基于单链表实现的栈
function StackLink(){
    this.head=new Linked(null);
    this.head.next=null;
    this.last=this.head;
}
// 入栈
StackLink.prototype.push=function(str){
    var last=new Linked(str);
    this.last.next=last;
    this.last=this.last.next;
    return this.head.next;
}
// 出栈
StackLink.prototype.pop=function(){
    if(this.last==this.head){return null;}
    var str=this.last.val
    var curr=this.head;
    while(curr&&curr.next){
        // 倒数第二个时
        if(curr.next.next==null){
            curr.next=null;
            this.last=curr;
        }
        curr=curr.next;
    }
    return str;
}