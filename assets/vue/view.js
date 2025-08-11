import modules from "./modules.js";
class View {

    static start() {
        var app = Vue.createApp({
            components: { h: modules.asyncLoad('index') },
            template: '<h></h>',
        })
        app.mount(document.body);
        return app;
    }

    static create(page) {
        var app = Vue.createApp(modules.asyncLoad(page))
        app.mount(document.body);
        return app;
    }

    static load(components) {
        var result = {};
        for (var name in components) {
            result[name] = modules.asyncLoad(components[name]);
        }
        return { components: result };
    }

}

window.View = View;
export default View;