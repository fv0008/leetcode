
var maximalSquare = function(matrix) {
   var yyy = 0
   var xxx = 0
   if (0==matrix.length) return 0
   for(var i = 0 ;i<matrix.length;i++){//y轴
       line = matrix[i]

       var b = 0
       for(var ii = 0 ;ii<matrix[i].length;ii++)//x轴
       {
          if(1==line[b]){
               test = true
               while(test){
                   for(var yy = i;yy<=b+i ;yy++)//y轴
                   {
                       for(var xx =ii;xx<=ii+b;xx++) //x轴
                       {
                           if( yy>=matrix.length || xx>=matrix[i].length||1!=matrix[yy][xx])
                           {
                               test = false
                               line = line.slice(b,line.length)
                               b = 0   
                               break
                           }
                       }
                   }
                   b++
                   if (test) { l = l>b?l:b}
               }            
           }else
           {
               line = line.slice(1,line.length)    
               b=0       
           }
       }
   }
   return l*l
};

maximalSquare([[1]])