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
            <a href="https://github.com/leftstick/vue-router-skeleton/blob/master/docs/qa.md" target="_blank" class="button">
                Read More
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

#more{
    width: 600px;
    margin: 30px auto 15px auto;
}

#more .button{
    display: inline-block;
    width: 150px;
    height: 35px;
    line-height: 35px;
    color: #fff;
    border-radius: 2px;
    background-color: #42b983;
    box-shadow: 2px 2px 1px #399F71;
    transition: all 0.3s ease 0s;
    text-decoration: none;
}

#more .button:hover{
    box-shadow: 4px 4px 2px #226144;
}

@media screen and (max-width: 600px) {
    #why, #more{
        width: 90%;
    }
}
</style>
