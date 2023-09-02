"use strict";
//auto bind Decorator
var App;
(function (App) {
    function autoBind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjustedDescriptor = {
            configurable: true,
            get() {
                const boundFunction = originalMethod.bind(this);
                return boundFunction;
            },
        };
        return adjustedDescriptor;
    }
    App.autoBind = autoBind;
})(App || (App = {}));
