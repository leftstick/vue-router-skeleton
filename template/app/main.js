import Vue from 'vue';
import VueRouter from 'vue-router';
import {Splash} from 'splash-screen';
import rootApp from './rootApp';
import plugins from './ext/plugins';
import Routes from './features/Routes';

class App {

    constructor() {
        Vue.use(VueRouter);
        Vue.config.devtools = process.env.NODE_ENV !== 'production';
    }

    registerExts() {
        this.plugins = plugins();
    }

    createVueOpts() {
        this.vueOps = Object.assign({}, {components: {rootApp}}, this.plugins);
    }

    setDefaultPath() {
        var defaultPaths = Routes
            .filter(route => route.isDefault)
            .map(route => route.path);
        if (!defaultPaths.length) {
            defaultPaths = [Routes[0].path];
        }
        this.defaultPaths = [{
            path: '*',
            redirect: defaultPaths[0]
        }];
    }

    registerRouters() {
        this.router = new VueRouter({
            routes: Routes.concat(this.defaultPaths),
            mode: '{{ mode }}',
            scrollBehavior: function(to, from, savedPosition) {
                return savedPosition || {x: 0, y: 0};
            }
        });
        this.vueOps = Object.assign({}, this.vueOps, {
            router: this.router
        });
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
        new Vue(this.vueOps).$mount('#application');
    }

    run() {
        this.registerExts();
        this.createVueOpts();
        this.setDefaultPath();
        this.registerRouters();
        this.destroySplash();
        this.launch();
    }

}

export default App;
