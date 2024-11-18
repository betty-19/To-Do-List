const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector(".row button");
const listContainer = document.querySelector("#list-container");

addBtn.addEventListener("click",()=>{
if(inputBox.value === ''){
    alert("You must write something");
}
else{
    let li= document.createElement("li");
    li.innerHTML = inputBox.value;
    
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    listContainer.appendChild(li);
    li.appendChild(span);

} 
inputBox.value = '';
saveData();
});
listContainer.addEventListener('click',function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();