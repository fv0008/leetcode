/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    var min = numbers[0]
    for(var i=0 ;i<numbers.length ;i++)
    {
        if(min>numbers[i])
        {
            min = numbers[i]  
        }
    }
    return min

};