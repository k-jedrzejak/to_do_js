const toDoInput = document.querySelector('.todo__input');
const toDoButton = document.querySelector('.todo__button');
const toDoList = document.querySelector('.todo__list');
const filter = document.querySelector('.filter');





const addToDo = (e) => {
    e.preventDefault();

    const toDoItem = document.createElement('div');
    toDoItem.classList.add('itembox');


    const toDoNew = document.createElement('li');
    toDoNew.classList.add('itembox__item');
    toDoNew.innerText = toDoInput.value;
    toDoItem.appendChild(toDoNew);


    const itemNumber = document.getElementsByClassName("itembox");
    const taskNumber = itemNumber.length
    const countNumber = document.createElement('div');
    countNumber.classList.add("task-number");
    countNumber.innerText = taskNumber + 1;
    toDoItem.appendChild(countNumber);

    const completeButton = document.createElement('button');
    completeButton.classList.add('itembox__btn', 'itembox__btn--complete');
    completeButton.innerText = "check";
    toDoItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('itembox__btn', 'itembox__btn--delete');
    deleteButton.innerText = "delete";
    toDoItem.appendChild(deleteButton);

    toDoList.prepend(toDoItem);
    toDoInput.value = '';
}



const deleteAndCheck = (e) =>{
    const btn = e.target;
    console.log(btn);

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
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            }
        else if(e.target.value === "uncompleted") {
                if(!element.classList.contains("completed")){
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            }
        else {
            element.style.display = "block";
            }  
    });
}   
      






toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteAndCheck);
filter.addEventListener('click', selectToDo);