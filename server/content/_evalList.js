

var promises = [];
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/_init.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/_utils.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/buttons.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/expeditedCheck.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/handleOriginalAddress.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/handlePayment.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/handlePlaceOrder.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/handleThankyou.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/listeners.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/panelHelpers.js");
promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/serialAutoStartNow.js");


promises[promises.length] = window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/z_runAfterExtensionDataReady.js");
Promise.all(promises).then(function (responses) {
    for (var index in responses) {
        eval(responses[index]);
    }
});

