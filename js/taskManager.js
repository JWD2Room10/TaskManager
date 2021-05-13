

const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    let html = `<li class="list-item border-0 col-6">
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">${name}<span class="badge bg-danger float-end">${status}</span></h5>
            <h6 class="card-subtitle mb-2 text-muted">Due Date: ${dueDate}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Assigend to: ${assignedTo}</h6>
            <p class="card-text">${description}</p>
            <div class="float-end">
                <button class="btn btn-light inprogress p-2">In progress</button>
                <button class="btn btn-light done p-2">Done</button>
                <button class="btn btn-light delete">Delete</button>

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

    addTask(name, description, assignedTo, dueDate, status = "todo") {
        this.currentId++;

        const newTask = {
            Id: this.currentId,
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
            let taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
        });
        let tasksHtml = tasksHtmlList.join('\n');
        let tasksList = document.querySelector('#tasks-list');
        tasksList.innerHTML = tasksHtml;
    }

}