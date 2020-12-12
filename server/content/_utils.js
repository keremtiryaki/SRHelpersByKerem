window.simulateClick2 = function (thisWindow, elem) {
    function triggerMouseEvent(thisWindow, node, eventType) {
        var clickEvent = thisWindow.document.createEvent("MouseEvents");
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    if (elem) {
        //--- Simulate a natural mouse-click sequence.
        triggerMouseEvent(thisWindow, elem, "mouseover");
        triggerMouseEvent(thisWindow, elem, "mousedown");
        triggerMouseEvent(thisWindow, elem, "mouseup");
        triggerMouseEvent(thisWindow, elem, "click");
    } else {
        console.log("*** elem not found to click 2");
    }
};

window.getElemByInnerTextContainsParamText = function (docum, textInnerParam, tagNameInnerParam) {
    var returnElem;
    docum.querySelectorAll(tagNameInnerParam).forEach(function (elem) {
        if (
            elem.innerText.trim().toLowerCase().indexOf(textInnerParam.trim().toLowerCase()) !== -1
        ) {
            if (!returnElem) {
                returnElem = elem;
            }
        }
    });
    return returnElem;
}