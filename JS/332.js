/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function sortNumber(a,b)
{
    var x = Number(a[1][0].charCodeAt()-64)
    var y = Number(b[1][0].charCodeAt()-64)
    return x - y
}
var findItinerary = function(tickets) {
    tickets.sort(sortNumber)
    var i=0
    while(tickets[i][0]!="JFK")
    {
        i++
    }
    var list = new Array()
    list.push(tickets[i][0])
    list.push(tickets[i][1])
    var f = tickets[i][1]
    tickets.splice(i,1)
    i=0
    while(tickets.length>0)
    {
        if(tickets[i][0]==f)
        {
            list.push(tickets[i][1])
            var f = tickets[i][1]
            tickets.splice(i,1)
            i=0
        }
        else
        {i++}
    }
    return list
};

findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]])