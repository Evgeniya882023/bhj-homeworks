let tasksInput = document.querySelector('.tasks__input');
let tasksAdd = document.querySelector('.tasks__add');
let tasksList = document.querySelector(".tasks__list");

function taskAdd(task) {
	tasksList.insertAdjacentHTML(`beforeEnd`, `
    <div class="task">
    <div class="task__title">
        ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`);

	tasksInput.value = "";


}

tasksAdd.onclick = function() {

	if (tasksInput.value.trim() != '') {
		taskAdd(tasksInput.value);
	}
	return false;
}

tasksList.onclick = function(e) {
	if (e.target.classList.contains(`task__remove`)) {
		e.target.closest(`.task`).remove();
	}
}


