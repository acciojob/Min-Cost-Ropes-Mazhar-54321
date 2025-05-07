function mincost(arr)
{ 
	arr = [...new Set(arr.sort((a,b)=>a-b));
	if(arr.length===1){
		return arr[0];
	}
	
    let sum=0;
    for(let i=1;i<arr.length;i++){
        arr[i]+=arr[i-1]
        sum+=arr[i]
    }
    return sum
//write your code here
// return the min cost
  
}

module.exports=mincost;
