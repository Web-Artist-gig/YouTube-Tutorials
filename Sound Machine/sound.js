window.addEventListener("load" , ()=>{
    const sounds=document.querySelectorAll(".sounds");
    const pads=document.querySelectorAll(".tap div")

    //get souds for styling
    pads.forEach((pad,index)=>{
        pad.addEventListener("click" , function(){
            sounds[index].currentTime=0;
            sounds[index].play();
        });
    });
});