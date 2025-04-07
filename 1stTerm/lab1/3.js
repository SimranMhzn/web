const pi=3.14;
function outer(){
  var temp2=10;
  function inner(){
    let temp1=20;
    if(temp1&&temp2!=null){
      console.log(temp1+temp2);
    }
    else{
      console.log("The value of pi is "+pi+".")
    }
  }
  inner();
}
outer();
