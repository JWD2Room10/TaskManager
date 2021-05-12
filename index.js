const submitButton = document.querySelector('#submitButton');

const validFormFieldInput = (e) => {
    e.preventDefault();

    const formAlert = document.querySelector('#formAlert');
    const errorList = document.createElement('ul');
    formAlert.appendChild(errorList);

    const taskName = document.querySelector('#taskName');

    if (!taskName.value) {
        const li = document.createElement('LI');
        li.innerHTML = 'Please add a task name';
        formAlert.appendChild(li);
        formAlert.style.display = 'block';
        taskName.style.border = "1px solid red";
    } else {
        const name = taskName.value;
    }


    const taskDescription = document.querySelector('#taskDescription');

    if (!taskDescription.value) {
        const li = document.createElement('LI');
        li.innerHTML = 'Please add a task description';
        formAlert.appendChild(li);
        formAlert.style.display = 'block';
        taskDescription.style.border = "1px solid red";
    } else {
        const description = taskDescription.value;
    }


    const taskStatus = document.querySelector('#taskStatus');

    if (!taskStatus.value) {

        const li = document.createElement('LI');
        li.innerHTML = 'Please select a status for your task';
        formAlert.appendChild(li);
        formAlert.style.display = 'block';
        taskStatus.style.border = "1px solid red";
    } else {
        const status = taskStatus.value;
    }


    const taskDueDate = document.querySelector('#taskDueDate');

    const today = new Date();
    const dueDateCheck = new Date(taskDueDate.value);
    console.log("today: " + today);
    console.log("selected date: " + dueDateCheck);

    if (dueDateCheck <= today || !taskDueDate.value) {

        const li = document.createElement('LI');
        li.innerHTML = 'Please select a due date in the future';
        formAlert.appendChild(li);
        formAlert.style.display = 'block';
        taskDueDate.style.border = "1px solid red";
    } else {
        const dueDate = taskDueDate.value;
    }

    const taskAssignedTo = document.querySelector('#taskAssignedTo');

    if (!taskAssignedTo.value) {

        const li = document.createElement('LI');
        li.innerHTML = 'Please assign this task to someone';
        formAlert.appendChild(li);
        formAlert.style.display = 'block';
        taskAssignedTo.style.border = "1px solid red";
    } else {

        const assignedTo = taskAssignedTo.value;
    }


    // console.log(name + description + status + dueDate + assignedTo);
}


submitButton.addEventListener('click', validFormFieldInput);