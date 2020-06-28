var findKthLargest = function(nums, k) {
    r = 0
    nums.sort((a,b)=>b-a)
    nums.forEach((el,i)=>{
        if(i+1==k)
        {
            r = el
        }
    })
    return r
};

findKthLargest([3,2,3,1,2,4,5,5,6],4)