function inputUser(str){
  return str
  .split(" ")
  .map((word,index)=>
    index == 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )
  .join("");    
}
console.log(inputUser("hello world example"))