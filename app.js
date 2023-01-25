var card_text = document.getElementsByClassName('card-text')[0]
var text= document.getElementById('text');
count = 0;

function GetValue(){
    card_text.innerHTML=`<p class="subString">Sub String</p>`
    if(text.value){
        card_text.innerHTML=`<p class="subString">Sub String</p>`
        for(i=0; i<text.value.length; i++){
            for(j=0; j<text.value.length; j++){
                if(i==j){
    
                    card_text.innerHTML+= `
                    <li>${text.value.charAt(i)}</li>
                    `
                }
                else{
                    
                    card_text.innerHTML+= `
                    <li>${text.value.charAt(i) + text.value.charAt(j)}</li>
                    `
                }
            }
        }
        text.value = "";
        text.focus();
    }
    else if(text.value===""){
        card_text.innerHTML = `Please Enter a value`
    }
  
    // else {
    //     // card_text.parentNode.children[3].remove();
        

    // }

}
function keypressBtn() {
    text.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        if (text.value !== "") {
            GetValue()
        //   document.getElementById("btn").onclick();
        }
      }
    });
  }
  keypressBtn();
