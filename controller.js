"use strict";
function ToDoController() {

    const vm = this;

    vm.list = [{
        task: "Walk the Dog",
        completed: true
    }, {
        task: "Bathe the Dog",
        completed: false
    }, {
        task: "Discuss existential crisis with the Dog",
        completed: false
    }, {
        task: "Confess love for dog",
        completed: true
    }]
    vm.addTask = (newTask) => {
        vm.list.push(angular.copy({task: newTask, completed: false}));
        console.log(newTask);
    };
    vm.removeTask = (index) => {
        vm.list.splice(index, 1);
        console.log(index);
    };

    vm.completeTask = (task) => {
        task.completed = true;
    };
 

}



angular
    .module("todoApp")
    .controller("ToDoController", ToDoController);