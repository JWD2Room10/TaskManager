
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    let doneButtonVisibility = 'visible';
    if (status === 'DONE') {
        doneButtonVisibility = 'invisible';
    }

    let statusBackground = '';

    if (status === 'DONE') {
        statusBackground = 'bg-success';

    } else if (status === 'INPROGRESS') {
        statusBackground = 'bg-warning';
    } else if (status === 'REVIEW') {
        statusBackground = 'bg-info';
    } else {
        statusBackground = 'bg-danger';
    }


    let html = `<li class="list-item border-0 col-6" data-task-id=${id}>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">${name}<span class="badge ${statusBackground} float-end">${status}</span></h5>
            <h6 class="card-subtitle mb-2 text-muted">Due Date: ${dueDate}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Assigend to: ${assignedTo}</h6>
            <p class="card-text">${description}</p>
            <div class="float-end">
                <button class="btn btn-success done-button ${doneButtonVisibility}">Mark As Done</button>
                <button class="btn btn-danger delete">Delete</button>
            </div>
        </div>
    </div>
</li>`
    return html;
}

class TaskManager {
    constructor(currentId) {
        this.tasks = [];
        this.currentId = 0;
    }

    addTask(name, description, assignedTo, dueDate, status = "TODO") {
        this.currentId++;

        const newTask = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }
        this.tasks.push(newTask);
    }

    render() {
        const tasksHtmlList = [];
        this.tasks.forEach(task => {
            let currentTask = task;
            let currentDate = new Date(currentTask.dueDate);
            let formattedDate = currentDate.toDateString();
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status, currentTask.id);
            tasksHtmlList.push(taskHtml);
        });
        let tasksHtml = tasksHtmlList.join('\n');
        let tasksList = document.querySelector('#tasks-list');
        tasksList.innerHTML = tasksHtml;
    }

    getTaskById(taskId) {
        let foundTask;

        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id == taskId) {
                foundTask = task;
            }
        } return foundTask;
    }

}