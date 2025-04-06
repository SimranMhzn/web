let user;
document.getElementById("button").onclick = function(){
    user=document.getElementById("name").value;
    document.getElementById("head").textContent = `Hello ${user}!`;
}