
window.getOptions = function () {
    var key = 'options';
    return new Promise(function (resolve) {
        chrome.storage.local.get([key], function (result) {
            resolve(result[key] || window.current_bg_data);
        });
    })
};

window.setOptions = function (options) {
    var key = 'options';
    return new Promise(function (resolve) {
        var obj = {};
        obj[key] = options;
        chrome.storage.local.set(obj, function () {
            resolve(obj);
        });
    })
}

window.getOptions().then(function (data) {
    window.current_bg_data = data;
});