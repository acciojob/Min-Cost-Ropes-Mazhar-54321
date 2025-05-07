function mincost(arr)
{ 
	if(arr.length===1){
		return arr[0];
	}
	arr.sort((a,b)=>a-b);
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
