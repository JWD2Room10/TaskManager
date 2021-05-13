
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

}