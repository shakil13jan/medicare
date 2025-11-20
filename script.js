function openLogin(){
document.getElementById("modal").style.display="flex";
}


function closeLogin(){
document.getElementById("modal").style.display="none";
}


function handleLogin(e){
e.preventDefault();
const user=document.getElementById("email").value;
alert(user + " logged in successfully (demo)");
closeLogin();
}


function scrollToContact(){
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}