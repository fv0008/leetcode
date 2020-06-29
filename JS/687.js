/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;

 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//这个题目改了好几次了，都是有问题的，每次都是js在测试的时候可以通过，正式提交就失败，例子一毛一样的
var longestUnivaluePath = function(root) {
    let res = 0
    const check = (r)=>{
        if(!r){return 0}
        var lmax = check(r.left)
        var rmax = check(r.right)  
        var llen = 0
        var rlen = 0
        if(null!=r.left && r.val==r.left.val) llen=lmax+1
        if(null!=r.right && r.val==r.right.val) rlen=rmax+1
        res = Math.max(res, llen + rlen)
        return Math.max(llen,rlen)
    }
    check(root)
    return res
};