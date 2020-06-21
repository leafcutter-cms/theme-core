/**
 * Leafcutter has its own page/render lifecycle events, which can be used to
 * set up new rendering systems, such as a planned addon for enabling turbolinks.
 * Generally, included JS in addons/themes should use these events whenever
 * possible, to avoid incompatibilities with future addons that may dramatically
 * alter the page rendering lifecycle.
 */
(() => {
    // dispatch leafcutter:render and leafcutter:load on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', (e) => {
        d('render');
        d('load');
    });
    // dispatch leafcutter:unload on beforeunload
    window.addEventListener('beforeunload', (e) => {
        d('unload');
    });
    // dispatch leafcutter:submit on submit
    window.addEventListener('submit', (e) => {
        d('submit', e);
    });

    /**
     * Spawns a new leafcutter event.
     * 
     * @param {string} n name of the event
     * @param {Event|null} s source event
     */
    function d(n, s = null) {
        var event = new Event("leafcutter:" + n, {
            "bubbles": true,
            "cancelable": true
        });
        if (s) {
            event.originalEvent = s;
        }
        document.dispatchEvent(event);
        if (s && event.defaultPrevented) {
            s.preventDefault();
        }
        return event;
    }
})();