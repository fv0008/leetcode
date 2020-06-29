var subb = function(a,b){
    r = false
    for(var i=a.length-1;i>=0;i-- ){
       if(a[i][0]>=b[0] && a[i][1]>=b[1])
       {
           var x = a[i][0]-b[0]
           var y = a[i][1]-b[1]
           xx = [x,a[i][1]-y]
           yy = [a[i][0]-x,y]
           if (x!=0) a.push(xx)
           if (y!=0) a.push(yy)
           if (x!=0 && y!=0)
           {
            a[i][0] = x
            a[i][1] = y
           }
           else if(x==0 || y==0)
           {
                a.splice(i,1);
           }

           r = true
           break
       }
    };
    return r
}

var tilingRectangle = function(n, m) {

    sub = new Array()
    p = 0
    do{
        r = [(p+1),(p+1)]
        sub[++p] = r
    }
    while(p<n && p<m)
    
    min = Math.pow(2,m+n)
    
    for(begin = sub.length-1;begin>=0;begin--)
    {
        i = 0
        total = [[m,n]]
        while(total.length!=0)
        {
            for(p=begin;p>=0;)
            {
                if (subb(total,sub[p]))
                {
                    console.log(sub[p])
                    i++
                }
                else{
                    p--
                }
            }
        }
        console.log(i)
        if(total.length==0)
        {min = min<i?min:i}
       

    }
    
    return i
}
tilingRectangle(11,13)