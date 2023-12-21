<template>
    Day12 Task1 vue js, d10/12/2023
    by RazmanR
    <div>
        <h1>Todo app</h1>

        <input placeholder="enter todo" v-model="newTodo" />

        <button @click="addTodo" placeholder="Add Task">Add Task</button>

        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>

    </div>
</template >

<!-- Day12 Task1 vue js
 
•
09:54
100 points
1. Add a button to name "add task" to add the add the task
2. Modify the code properly
3.Give proper CSS -->

<script>
export default {
    name: "TodosApp",

    data() {
        return {
            newTodo: '',
            todos: [],   // the list
        }
    },

    methods:
    {
        addTodo() {
            if (this.newTodo.trim())

                this.todos.push(
                    this.newTodo.trim());
            this.newTodo = "";

        },

        removeTodo(index) {
            this.todos.splice(index, 1)

        }
    }

};
</script>

<style>
button {
    padding: 10px;
    margin: 10px;
    background-color: rgb(58, 58, 233);

}

li {
    font-weight: bold;
    color: black;
    background-color: lightgrey;

}

img {
    width: 55px;

}
</style>