window.handleOriginalAddress = function () {
    var elemH1 = window.getElemByInnerTextContainsParamText(window.document, "Verify your shipping address", "h1")
    var elem = window.getElemByInnerTextContainsParamText(window.document, "Original address", "label")
    if (elem && elemH1) {
        window.simulateClick2(window, elem);
        setTimeout(function () {
            window.simulateClick2(window, document.querySelector('input[value="Deliver to this address"]'));
        }, 1000);
    }
}