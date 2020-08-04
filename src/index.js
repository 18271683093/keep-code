((name, definition) => {
    if (typeof define === 'function') {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('app', function () {
    return Vue => new Vue({
        el: "#app",
        data: {
            test: "test"
        }
    })
})