
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("BG REMOTE content chrome.runtime.onMessage:arguments:", arguments);
    if (request.action === "fetchResourceAsText") {
        if (window.cacheSrc[request.src]) {
            sendResponse(window.cacheSrc[request.src]);
        } else {
            fetch(request.src)
                .then(function (res) {
                    return res.text();
                }).then(function (responseText) {
                    window.cacheSrc[request.src] = responseText;
                    sendResponse(window.cacheSrc[request.src]);
                });
        }
    } else if (request.action === "saveData") {
        window.current_bg_data = request.data;
        window.setOptions(window.current_bg_data);
        sendResponse(true);
    } else if (request.action === "getData") {
        window.getOptions().then(function (data) {
            window.current_bg_data = data;
            sendResponse(window.current_bg_data);
        });
    } else {
        console.log("content chrome.runtime.onMessage:arguments:", arguments);
        alert('ERROR! unknown onMessage error');
    }
    return true;
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({
        active: !0,
        currentWindow: !0
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            actionName: "onClickedExtensionButton"
        })
    })
});