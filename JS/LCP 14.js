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
    if(nums.length>1)
    {
        var min = new Array()
        if(2==nums.length)//专门检查双元组符合最大公约条件
        {
            min[1]=2
            if( T_GCD( nums[0],nums[1]))
            {
               return 1 //最优解
            }
        }
        for(var i=0;i<nums.length - 1;i++)
        {
            min[i]=0
            //最小的切割方案要从2分开始
            var f = nums.slice(0,i+1);
            var s = nums.slice(i+1,nums.length)
            //检查是不是符合最大公约
            var check_f = T_GCD(f[0],f[i])
            var check_s = (s.length!=0)?T_GCD(s[0],s[nums.length - i - 2]):true
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
                return a-b;
        })
        t = min[0]
        return t;
    }
    if(nums.length==1) return 1
    if(nums.length==0) return 0
};

r = splitArray([24421,235181,103393,105691,30577,209717,190283,188861,10613,119953,146423,64621,4649,118669,144583,87743,187193,43177,118361,205151,184829,3037,114143,142169,121447,190871,53609,2459,198491,96097,166601,89303,35353,186793,63907,24851,55547,156841,39799,155851,24709,149027,4127,499591,710341,499493,639137,764053,387397,641471,407621,592853,680293,274121,684643,701963,718411,594857,673327,347177,548069,283487,609209,713267,436651,273881,591091,277787,584429,729173,753631,414809,295751,743047,441797,283607,550351,652373,488207,490783,465079,266081,483809,321469,593041,740653,390967,578399,557057,357661,743159,643949,612817,465011,337031,323101,612671,801011,808187,980621])
//r = splitArray([2,3,5,7])
console.log(r)