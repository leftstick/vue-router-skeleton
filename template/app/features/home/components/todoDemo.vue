<template>
    <div id="todo-app">
        <h3>Simple TODO app</h3>
        <input type="text" placeholder="Typing here..." @keyup.enter="addTodo">

        <span>{{ remaining }} of {{ todos.length }} remaining</span>

        <ul class="todos">
            <li v-for="todo of todos">
                <input type="checkbox" v-model="todo.finished">
                <span :style="{'text-decoration': todo.finished ? 'line-through' : 'none'}">
                    {{ todo.txt }}
                </span>
            </li>
        </ul>

        <a href="" class="archive" :disabled="remaining === todos.length" @click.prevent.stop="archive">archive</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: []
        };
    },
    methods: {
        addTodo(e) {
            this.todos.push({txt: e.target.value});
            e.target.value = '';
        },

        archive() {
            this.todos = this.todos.filter(todo => !todo.finished);
        }
    },
    computed: {
        remaining() {
            return this.todos.reduce((n, todo) => n + Number(!todo.finished), 0);
        }
    }
};
</script>

<style scoped>
#todo-app{
    width: 250px;
    margin: 0 auto 30px auto;
}

#todo-app input[type="text"]{
    width: 250px;
    height: 20px;
    font-size: 16px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

#todo-app .todos{
    width: 100%;
    list-style-type: none;
    margin: 10px 0 10px 0 ;
    padding: 0;
    text-align: left;
}

#todo-app .todos li{
    padding-top: 4px;
}

#todo-app .todos li span{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 225px;
    display: inline-block;
    vertical-align: middle;
}

#todo-app .archive{
    text-decoration: none;
}

#todo-app .archive[disabled]{
    pointer-events: none;
    color: #7f8c8d;
}
</style>
