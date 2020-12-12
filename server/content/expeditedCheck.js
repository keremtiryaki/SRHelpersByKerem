window.expeditedChecks = function () {
    console.log("window.current_c_data.selectBestForExpeditedShippings", window.current_c_data.selectBestForExpeditedShippings);
    if (window.current_c_data.selectBestForExpeditedShippings) {
        var elem = document.querySelector("body > x-sellerrunning").shadowRoot.querySelector("#sllrrnng-orderdetail-shipping-service");
        if (elem && elem.innerText.trim().toLowerCase() === "expedited") {
            var elem33 = window.getElemByInnerTextContainsParamText(window.document, "Priority Shipping", "div.a-accordion-row");
            if (elem33) {
                window.simulateClick2(window, elem33);
            } else {
                var elem22 = window.getElemByInnerTextContainsParamText(window.document, "AmazonGlobal Expedited Shipping", "div.a-accordion-row")
                window.simulateClick2(window, elem22);
            }
        }
    }
}