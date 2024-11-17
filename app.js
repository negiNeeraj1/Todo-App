
let btn=document.querySelector("button");
let ul=document.querySelector("ul");


function addValue(){
    let inputValue=document.querySelector("input");
    let inpValue=inputValue.value;
    let liText=document.createElement("li");
       liText.innerText=inpValue;
        ul.appendChild(liText);
        inputValue.value="";
        let btn1=document.createElement("button");
        btn1.classList.add("delete");
        btn1.innerText="delete";
        liText.appendChild(btn1);
  
        btn1.addEventListener("click",()=>{
            ul.removeChild(liText);
        })
}
btn.addEventListener("click",addValue);

