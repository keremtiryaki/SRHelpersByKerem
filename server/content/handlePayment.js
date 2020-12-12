window.handlePayment = function () {
    window.checkPromo = function (thisWindow) {
        thisWindow.setTimeout(function () {
            var promoElem = thisWindow.document.querySelector("input[value='usePromo']");
            if (promoElem) {
                if (promoElem.checked === false) {
                    window.simulateClick2(thisWindow, promoElem);
                }
            }
        }, 1000);
    }
    window.clickContinue = function () {
        window.setTimeout(function () {
            var continueInputElem = window.document.querySelector("input[value='Continue'][type='submit']");
            if (continueInputElem) {
                window.simulateClick2(window, continueInputElem);
            }
            var continueElem = window.getElemByInnerTextContainsParamText(window.document, "continue", "span.a-button")
            if(continueElem){
                window.simulateClick2(window, continueElem);
            }
        }, 5000);
    }
    window.getCardInputElem = function (thisWindow) {
        var inputTextElems = thisWindow.document.querySelectorAll('input[type="text"]');
        var resultElem;
        inputTextElems.forEach(function (elem) {
            if (!resultElem) {
                var name = elem.getAttribute('name');
                var id = elem.getAttribute('id');
                var placeholder = elem.getAttribute('placeholder');
                if (
                    placeholder &&
                    placeholder.indexOf('ending in') !== -1 &&
                    (
                        (
                            name &&
                            name.indexOf('addCreditCardNumber') !== -1
                        )
                        ||
                        (
                            id &&
                            id.indexOf('addCreditCardNumber') !== -1
                        )
                    )
                ) {
                    resultElem = elem;
                }
            }
        })
        return resultElem;
    }
    setTimeout(function () {
        window.checkPromo(window);
        setTimeout(function () {
            window.clickContinue();
        }, 3000);
        setTimeout(function () {
            if(
                window.current_c_data.cardNumber &&
                window.current_c_data.cardNumber.toString().trim().length > 2
            ){
                var elem = window.getCardInputElem(window);
                if (elem) {
                    elem.value = window.current_c_data.cardNumber;
                    var verfiyElem = window.getElemByInnerTextContainsParamText(window.document, "Verify card", "button")
                    window.simulateClick2(window, verfiyElem);
                    setTimeout(function () {
                        window.checkPromo(window);
                        setTimeout(function () {
                            window.clickContinue();
                        }, 3000);
                    }, 3000);
                }
            }
        }, 8000);
    }, 3000);
}