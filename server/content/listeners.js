chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.actionName === "onClickedExtensionButton") {
        window.onClickedExtensionButton();
    }
    return true;
});