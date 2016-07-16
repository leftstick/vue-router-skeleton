import Vue from 'vue';
import {Splash} from 'splash-screen';
import rootApp from './rootApp';

class App {

    constructor() {}

    destroySplash() {
        var _this = this;
        Splash.destroy();
        require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        /* eslint-disable no-new */
        new Vue({el: 'body', components: {rootApp}});
    }

    run() {
        this.destroySplash();
        this.launch();
    }

}

export default App;
