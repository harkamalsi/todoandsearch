const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//seperate function for 
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length) {
    generateTemplate(todo);

    //input fields are reseted here
    addForm.reset();
  }
});

//delete todos using event delegation
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    //parent is li tag
    e.target.parentElement.remove();
  }
});

