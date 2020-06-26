/**
 * @param {number[]} nums
 * @return {number}
 */
function T_gcd(a,b){    //递归检查最大公约
    if(b == 0){
        return a > 1;
    }
    var r = a % b;
    return gcd(b,r);
}
function T_GCD(a,b){    //迭代检查最大公约
    var temp;
    while(b != 0){
        temp = a % b;
        a = b;
        b = temp;
    }
    return a>1;
}
var splitArray = function(nums) {
    if(nums.length>2)
    {
        min = new Array()
        for(var i=1;i<nums.length;i++)
        {
            //最小的切割方案要从2分开始
            f = nums.slice(0,i);
            s = nums.slice(i,nums.length)
            //检查是不是符合最大公约
            check_f = T_GCD(f[0],f[i-1])
            check_s = T_GCD(s[0],s[nums.length - i - 1])
            if(check_f)
            {
                min[i] = min[i] + 1
            }
            else
            {
                min[i] = min[i] + splitArray(f)
            }

            if(check_s)
            {
                min[i] = min[i] + 1
            }
            else
            {
                min[i] = min[i] + splitArray(s)
            }
        }
        min.sort(function(a,b){
                return a.age>b.age;
        })
        return min[0];
    }
};

r = splitArray([2,3,3,2,3,3])
console.log(r)