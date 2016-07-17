<template>
    <div id="about">
        <div id="why">
            <h4>You will like it if you are looking for skeleton with:</h4>
            <ul>
                <li>easy used dev/release tools</li>
                <li>reasonable structure, external libraries can be easily injected</li>
                <li>robust functionality, no black magic behind, just <code>Vue</code> usage</li>
                <li>ES2015 syntax</li>
            </ul>
        </div>

        <div id="more">
            <a href="https://github.com/leftstick/vue-router-skeleton/blob/master/docs/api.md" target="_blank" class="button">
                more read
            </a>
        </div>
    </div>
</template>

<script>
export default { }
</script>

<style scoped>
#about{
    text-align: center;
}

#why{
    width: 600px;
    margin: 55px auto 15px auto;
    padding: 5px;
    text-align: left;
    border: 1px solid #D8D8D8;
    border-radius: 2px;
    background-color: #f7f7f9;
}

#why h4{
    margin-top: 0;
}

#why ul li {
    padding-top: 5px;
}

#more{
    width: 600px;
    margin: 30px auto 15px auto;
    padding: 5px;
}

#more .button{
    display: inline-block;
    width: 150px;
    height: 35px;
    line-height: 35px;
    color: #fff;
    border-radius: 2px;
    border-width: 0;
    background-color: #FE2E2E;
    box-shadow: 2px 2px 1px #a6120d;
    transition: all 0.3s ease 0s;
}

#more .button:hover{
    box-shadow: 4px 4px 2px #a6120d;
}
</style>
