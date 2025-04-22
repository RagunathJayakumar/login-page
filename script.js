var Name= document.getElementById("Name");
var password= document.getElementById("passwords");
var notShow = document.getElementById("eye-close");
var message= document.getElementById("err-msg");
var message2=document.getElementById("err-msg2");
var login =document.getElementById("btn");
var show = document.getElementById("eye-open")




login.addEventListener("click",function(){
    if(Name.value ==""){
        message.style.display="block";
    } 
    else{
        message.style.display="none"
    }
    if(password.value ==""){
        message2.style.display="block";
    }
    else{
        message2.style.display="none"
    }

    String(password.value)
    if ( Name.value=="ragunath"&& password.value=="12345") {
        alert("you successfully loged in")
    }
    else{
        alert("Please cheack your Password or Username")
    }
   
})

notShow.addEventListener("click", function(){
    if(password.type ==="password"){
        password.type='text';
        show.style.zIndex=1;
    }

})
show.addEventListener("click", function(){
      
    if(password.type ==="text"){
        password.type="password"
        show.style.zIndex='-1';
    }


})


