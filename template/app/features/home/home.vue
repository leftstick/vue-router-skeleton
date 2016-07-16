<template>
    <div id="home">
        <logo></logo>

        <p id="desc">
            A dead simple <code>webpack</code> + <code>vue-loader</code> setup with <code>vue-router</code> involved, including full featured dev/release process<br/><br/>
            Very welcome to give me feedbacks! <br/><br/>
            Stars would be the best^^!!
        </p>

        <badge></badge>

        <todo-demo></todo-demo>

        <div id="footer">
            <p>Released under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a></p>
            <p>Copyright (c) 2016 <a href="https://github.com/leftstick" target="_blank">Howard.Zuo</a></p>
        </div>
    </div>
</template>

<script>
import logo from './components/logo';
import badge from './components/badge';
import todoDemo from './components/todoDemo';

export default {

    created: function() {
    },

    components: {logo, badge, todoDemo}
}
</script>

<style scoped>
#home{
    text-align: center;
}

#desc {
    max-width: 800px;
    margin: 10px auto;
    color: #7f8c8d;
}
</style>
