const toDoInput = document.querySelector('.todo__input');
const toDoButton = document.querySelector('.todo__button');
const toDoList = document.querySelector('.todo__list');
const filter = document.querySelector('.filter');



const addToDo = (e) => {
    e.preventDefault();

    const toDoItem = document.createElement('div');
    toDoItem.classList.add('itembox');

    const itemNumber = document.getElementsByClassName("itembox");
    const taskNumber = itemNumber.length
    const countNumber = document.createElement('div');
    countNumber.classList.add("task-number");
    countNumber.innerText = `Task: ${taskNumber}`;
    toDoItem.appendChild(countNumber);

    const completeButton = document.createElement('button'); 
    completeButton.classList.add('itembox__btn', 'itembox__btn--complete');
    completeButton.innerHTML = "<i class='fas fa-check-circle'></i>";
    toDoItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('itembox__btn', 'itembox__btn--delete');
    deleteButton.innerHTML = "<i class='fas fa-minus-circle'></i>";
    toDoItem.appendChild(deleteButton);

    const toDoNew = document.createElement('li');
    toDoNew.classList.add('itembox__item');
    toDoNew.innerText = toDoInput.value;
    toDoItem.appendChild(toDoNew);

    toDoList.prepend(toDoItem);
    toDoInput.value = '';
}



const deleteAndCheck = (e) =>{
    const btn = e.target;

    if(btn.classList[1] === 'itembox__btn--complete'){
        const item = btn.parentElement;
        item.classList.toggle('completed');
    } 
    else if(btn.classList[1] === 'itembox__btn--delete'){
        const item = btn.parentElement;
        item.classList.add('removed');
        item.addEventListener('transitionend', function() {
            item.remove();
        });
        
    }

}


function selectToDo(e) {
    const items = toDoList.childNodes;
    items.forEach(function(element){

        if(e.target.value === "completed"){
            if(element.classList.contains("completed")){
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }
            }
        else if(e.target.value === "uncompleted") {
                if(!element.classList.contains("completed")){
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }
            }
        else {
            element.style.display = "flex";
            }  
    });
}

const changeBg = (e) => {
    const body = document.querySelector('body');
    const key = e.keyCode;
    console.log(key);
    

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const r1 = Math.floor(Math.random()*256);
    const g1 = Math.floor(Math.random()*256);
    const b1 = Math.floor(Math.random()*256);

    if (key === 32) {
        console.log(body);

        body.style.backgroundImage = `linear-gradient(360deg, rgb(${r},${g},${b}), rgb(${r1},${g1},${b1}))`;    
    }
}
      

toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteAndCheck);
filter.addEventListener('click', selectToDo);
window.addEventListener('keypress', changeBg);
