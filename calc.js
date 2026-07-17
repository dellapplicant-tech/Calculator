let inp= document.querySelector("input");
let btn=document.querySelectorAll("button");
btn.forEach((button) => {
   
    button.addEventListener("click", () => {
      if(button.innerHTML === "="){
        inp.value= eval(inp.value);
    }
    else if(button.innerHTML === "AC"){
        inp.value="";
    }
    else if(button.innerHTML === "C"){
        inp.value="";
    }
    else if(button.innerHTML === "X"){
         inp.value +="*";
    }
     else if(button.innerHTML === "÷"){
         inp.value +="/";
    }
     else if(button.innerHTML === "C"){
         inp.value =inp.value.slice(0,-1);
    }
    else {
         inp.value += button.innerHTML;
    }
    })
    
});
