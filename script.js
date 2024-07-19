const addTaskButton = document.querySelector('.addtaskbutton button');
const listContainer = document.querySelector('.listcont');
const inputBox = document.querySelector('.input-box input');
const inputBoxDiv = document.querySelector('.input-box');

inputBoxDiv.classList.add('hide');
addTaskButton.addEventListener('click', function() {
    if (inputBox.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = inputBox.value;
        listContainer.appendChild(newItem);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        newItem.appendChild(span);
        inputBox.value = '';
    }
    inputBoxDiv.classList.toggle('show-input');
    saveData();
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();