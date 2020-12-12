window.handlePlaceOrder = function () {
    console.log('gonna try place the order')
    setTimeout(function () {
        var elem = document.querySelector("body > x-sellerrunning").shadowRoot.querySelector("#sllrrnng-extension-alert-container > div > p:nth-child(1)");
        console.log("elem", elem)
        console.log("elem.innerText", elem.innerText)
        if (elem &&
            (
                elem.innerText === "Sipariş ayrıntılarınızı gözden geçirin ve siparişinizi tamamlayın." ||
                elem.innerText === "Review your order details and complete your order."
            )
        ) {
            if (window.current_c_data.selectBestForExpeditedShippings) {
                var elem = document.querySelector("body > x-sellerrunning").shadowRoot.querySelector("#sllrrnng-orderdetail-shipping-service");
                if (elem && elem.innerText.trim().toLowerCase() === "expedited") {
                    var elem33 = window.getElemByInnerTextContainsParamText(window.document, "Priority Shipping", "div.shipping-speed.ship-option.a-radio");
                    if (elem33) {
                        window.simulateClick2(window, elem33);
                    } else {
                        var elem22 = window.getElemByInnerTextContainsParamText(window.document, "Expedited Shipping", "div.shipping-speed.ship-option.a-radio")
                        window.simulateClick2(window, elem22);
                    }
                }
            }
            setTimeout(function () {
                var placeOrderBtn = document.querySelector("#placeYourOrder > span > input");
                if (placeOrderBtn) {
                    var estimatedPrice = window.document.querySelector("body > x-sellerrunning").shadowRoot.querySelector("#sllrrnng-orderdetail-cost").innerText;
                    estimatedPrice = parseFloat(estimatedPrice.replace('US$', ''));
                    var totalPrice = window.document.querySelector('.grand-total-price');
                    totalPrice = parseFloat(totalPrice.innerText.replace("$", "").replace(/,/g, ""));

                    var treeshold_plus_estimatedPrice = estimatedPrice + window.current_c_data.estimated_total_treeshold;

                    if (treeshold_plus_estimatedPrice > totalPrice) {
                        window.simulateClick2(window, placeOrderBtn);
                    } else {
                        alert("ABORT! more expensive than expected total");
                    }
                }
            }, 3000);
        } else {
            console.log("will try again")
            setTimeout(function () {
                window.handlePlaceOrder();
            }, 5000);
        }
    }, 2000);
}