function mincost(arr)
{ 
	// arr = [...new Set(arr.sort((a,b)=>a-b));
	if(arr.length===1){
		return 0;
	}
	
    let sum=0;
    while(arr.length>1){
		let f = arr[0];
		let s = arr[1];
		let cost =f+s;
		sum+=cost;
		arr.splice(0,2);
		let i=0;
		while(i<arr.length && arr[i]<cost)i++;
		arr.splice(i,0,cost)
	}
    return sum
//write your code here
// return the min cost
  
}

module.exports=mincost;
