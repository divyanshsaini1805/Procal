let chat=document.querySelector(".chats");


chat.addEventListener("click",()=>{
     chat.style.display="block";

    chat.classList.add("size");

         setTimeout(function(){
            chat.classList.toggle("size");
         },5000); 
});  
  
