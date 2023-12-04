const trash=document.querySelector(".trash");
trash.addEventListener("click", function ()
{
   trash.style.backgroundImage= "none";
   setTimeout(()=>{alert("Has pulsado")},40);
      
});
