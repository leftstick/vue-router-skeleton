import Vue from 'vue';
import VueRouter from 'vue-router';
import {Splash} from 'splash-screen';
import rootApp from './rootApp';

import Routes from './features/Routes';

class App {

    constructor() {
        Vue.use(VueRouter);
    }

    createApplication() {
        this.app = Vue.extend({
            el: function() {
                return 'body';
            },
            components: {
                rootApp
            }
        });
    }

    registerRouters() {
        this.router = new VueRouter({history: {{ html5Mode }}{{#if html5Mode}}, root: '/'{{/if}} });
        this.router.map(Routes);
    }

    setDefaultPath() {
        var defaultPaths = Object
            .keys(Routes)
            .filter(path => Routes[path].isDefault);
        if (!defaultPaths.length) {
            defaultPaths = [Object.keys(Routes)[0]];
        }
        this.router.redirect({'*': defaultPaths[0]});
    }

    destroySplash() {
        Splash.destroy();
        require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(() => {
            if (Splash.isRunning()) {
                this.destroySplash();
            }
        }, 100);
    }

    launch() {
        this.router.start(this.app, 'body');
    }

    run() {
        this.createApplication();
        this.registerRouters();
        this.setDefaultPath();
        this.destroySplash();
        this.launch();
    }

}

export default App;
