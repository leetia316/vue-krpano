/**
 * Created by chenshu on 02/03/2017.
 */
"use strict";

import core from "./core";
import lazyLoad from "./features/lazyLoad";
import freezeVertical from "./features/freezeVertical";

let component = {

    name: "Krpano",

    mixins: [core, lazyLoad, freezeVertical],

    template: "<div class='vue-krpano'></div>",

    mounted(){
        this.createPano();
    }
};

component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component;