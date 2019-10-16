function changeText(){
    const text= document.getElementById('change')
        
    if(text.innerHTML==="4"){
        text.innerHTML = "0"
    } else if(text.innerHTML==="0"){
        text.innerHTML==="j"
    } else if(text.innerHTML==="j"){
        text.innerHTML==="k"}
}

changeText();
setInterval(changeText,200);