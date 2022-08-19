let taskDom = document.querySelector("#task")
let addButton = document.querySelector("#liveToastBtn")
let listDom =document.querySelector("#list") 
let ulLength = document.getElementsByTagName("li")


// çarpı işlemi 

function mult(ulLength){
for (let i = 0; i< ulLength.length;
    i++){
        if(!ulLength[i].querySelector(".close")){ // li elementine tekrar çarpı eklememk için kontrol ediyoruz.
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7"// çarpı 
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        ulLength[i].append(closeButton);
        ulLength[i].onclick = check 
        localStorage.setItem(`${i}`,`${ulLength[i].textContent}`)
        
        }
    }
}
mult(ulLength)

// Dinleyici
addButton.addEventListener("click",newElement())

function check(){
    this.classList.toggle("checked")
}

// eleman silme
function removeButton(){
    this.parentElement.remove(); // çarpılı ifadeyi silmek için
    localStorage.removeItem("items");
  }

// add element in todolist
function newElement(){
    if(taskDom.value == ""){
        $(".error").toast("show"); 
    } 
    else {
        $(".success").toast("show")
      
       
    let li = document.createElement("li")
    li.innerHTML = taskDom.value
    listDom.appendChild(li)
    taskDom.value = ""
    
    ulLength = document.getElementsByTagName("li")

    mult(ulLength)

    
    }
}
