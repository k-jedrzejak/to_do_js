const toDoInput = document.querySelector('.todo__input');
const toDoButton = document.querySelector('.todo__button');
const toDoList = document.querySelector('.todo__list');





const addToDo = (e) => {
    e.preventDefault();

    const toDoItem = document.createElement('div');
    toDoItem.classList.add('itembox');
    console.log(toDoItem);

    const toDoNew = document.createElement('li');
    toDoNew.classList.add('itembox__item')
    toDoNew.innerText = toDoInput.value;
    toDoItem.appendChild(toDoNew);

    const completeButton = document.createElement('button');
    completeButton.classList.add('itembox__btn', 'itembox__btn--complete')
    completeButton.innerText = "check";
    toDoItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('itembox__btn', 'itembox__btn--delete')
    deleteButton.innerText = "delete";
    toDoItem.appendChild(deleteButton);

    toDoList.appendChild(toDoItem);
    toDoInput.value = '';

}






toDoButton.addEventListener('click', addToDo);