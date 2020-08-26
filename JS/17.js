/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var stringdigit = String(digits)
    var ar = new Array();
    ar[1]=""
    ar[2]="abc"
    ar[3]="def"
    ar[4]="ghi"
    ar[5]="jkl"
    ar[6]="mno"
    ar[7]="pqrs"
    ar[8]="tuv"
    ar[9]="wxyz"
    var s = new Array()
    for(var i=0 ;i<stringdigit.length;i++)
    {
        if(s.length>0)
        {
            var ss = new Array()
            s.forEach((el,index)=>{
                var num = Number(stringdigit[i])
                for(var t=0;t<ar[num].length;t++)
                {
                    ss.push(el+ar[num][t])
                }
            })
            s = ss;
        }
        else{
            var num = Number(stringdigit[i])
            for(var t=0;t<ar[num].length;t++)
            {
                s.push(ar[num][t])
            }
        }
    }
    return s
};

letterCombinations("23")