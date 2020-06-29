/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
    var all = new Array()
    for(var i=1;i<=s.length;i++)
    {
        var sub = s.slice(0,i);
        if(sub.length>0 && sub == sub.split("").reverse().join(""))
        {
            ssub = s.slice(i,s.length)
            if(ssub.length>0)
            {
                var rr = partition(ssub)
                rr.forEach((el)=>{
                    var r = new Array()
                    r.push(sub)
                    if (el instanceof Array) {
                        el.forEach((el1)=>{
                            r.push(el1)
                        })
                    }
                    else {r.push(el)}
                    all.push(r)
                })
            }
            else{
                var r = new Array()
                r.push(sub)
                all.push(r)
            }

        } 
    }
    //all.reverse()
    return all
};

partition( "aab")