const email = document.getElementById('email');
const submit = document.getElementById('submit');
submit.addEventListener("click",function(){
  const emailValue=email.value;
  //{mentioned sabai hunai parcha} [mentioned madhye kunai euta mention hunu parcha]
  const re = /{@gmail.com}/
  if(re.test(emailValue)){
    window.alert("Valid email");
  }
  else{ 
    window.alert("Invalid email");
  }
})