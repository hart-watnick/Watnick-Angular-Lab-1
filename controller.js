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
    vm.addToDo = (newTask) => {
        vm.list.push(angular.copy(newTask));
    };

}



angular
    .module("todoApp")
    .controller("ToDoController", ToDoController);