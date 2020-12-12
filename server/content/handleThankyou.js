window.handleThankYou = function () {
    setInterval(function () {
        var elem = document.querySelector("body > x-sellerrunning").shadowRoot.querySelector("#sllrrnng-extension-alert-container > div > div");
        if (elem && (
            elem.innerText.indexOf('Tebrikler! Siparişiniz tamamlandı') !== -1 ||
            elem.innerText.indexOf('Congratulations! Your order has been completed') !== -1
        )) {
            setTimeout(function () {
                window.location.href = window.MAIN_SERIAL_LINK;
            }, 1000);
        }
    }, 2000);
}