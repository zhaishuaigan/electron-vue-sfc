import { loadModule } from './vue3-sfc-loader.esm.js'
export default class AsyncModule {
    static getConfig() {
        return {
            moduleCache: {
                vue: Vue,
            },
            async getFile(url) {
                var path = './assets/view/' + url;
                path = path.replace(/\/[^\/]*\/\.\.\//, '/');
                const res = await fetch(path);
                if (!res.ok) {
                    console.error("加载失败: ", res.url);
                    throw Object.assign(new Error(path + ' ' + res.statusText), { res });
                }
                var resText = await res.text();

                if (!path.endsWith('.vue')) {
                    return resText;

                }
                return resText;
            },
            addStyle(textContent) {
                const style = Object.assign(document.createElement('style'), { textContent });
                const ref = document.head.getElementsByTagName('style')[0] || null;
                document.head.insertBefore(style, ref);
            },

            log(type, ...args) {
                console[type](...args);
            },
            compiledCache: {
                set(key, str) {
                    window.localStorage.setItem(key, str);
                },
                get(key) {
                    return window.localStorage.getItem(key);
                },
            },
            handleModule(type, source, path, options) {
                if (type === '.json') {
                    return JSON.parse(source);
                }
                if (type === '.ini') {
                    return source;
                }
            }
        }
    }

    static asyncLoad(page) {
        page += '.vue';
        try {
            return Vue.defineAsyncComponent(() => loadModule(page, AsyncModule.getConfig()));
        } catch (e) {
            console.error("加载模块出错: ", e);
        }

    }

}