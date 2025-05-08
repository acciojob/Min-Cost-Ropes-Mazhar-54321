function mincost(arr)
{ 
	
	
    let sum=0;
    while(arr.length>1){
		arr.sort((a,b)=>a-b)
		let f = arr[0];
		let s = arr[1];
		let cost =f+s;
		sum+=cost;
		arr.splice(0,2);
		arr.push(cost)
		
	}
    return sum
//write your code here
// return the min cost
  
}

module.exports=mincost;
