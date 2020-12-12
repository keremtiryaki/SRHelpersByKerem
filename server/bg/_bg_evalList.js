
window.fetchResourceAsText = function (url) {
    return fetch(url)
        .then(function (res) {
            return res.text();
        });
}

var promises = [];
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/bg/_bg_init.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/bg/storage.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/bg/bg_listeners.js");
Promise.all(promises).then(function (responses) {
    for (var index in responses) {
        eval(responses[index]);
    }
});

