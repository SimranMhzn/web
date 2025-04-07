function removing(arr){
  const output=[...new Set(arr)];
  output.sort((a,b)=>b-a);
  console.log(output);
}
removing([3,1,4,5,6,3,7,5,8,3]);