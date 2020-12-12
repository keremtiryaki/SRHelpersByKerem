window.runAfterExtensionDataReady = function () {
    if(window.current_c_data.isExtensionPaused){
        console.log('paused');
        return;
    }
    
    if (window.location.href.indexOf(window.MAIN_SERIAL_LINK) === 0) {
        window.serialAutoStartNowFunction()
    }
    if (window.location.href.indexOf('https://app.sellerrunning.com') === 0) {
        window.insertButtons();
    }
    setTimeout(function () {
        window.orderPageHandler();
    }, 1000)
}

var tryCount = 0;
window.orderPageHandler = function(){
    tryCount++;
    if(tryCount > 30){
        window.location.reload();
    }else{
        if (document.querySelector("body > x-sellerrunning")) {
            if (window.location.href.indexOf('https://www.amazon.com/gp/buy/shipoptionselect/handlers/display.html') === 0) {
                window.expeditedChecks();
            } else if (window.location.href.indexOf('https://www.amazon.com/gp/buy/addressselect/handlers/display.html') === 0) {
                window.handleOriginalAddress();
            } else if (window.location.href.indexOf('https://www.amazon.com/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1') === 0) {
                window.handlePlaceOrder();
            } else if (window.location.href.indexOf('https://www.amazon.com/gp/buy/thankyou/handlers/display.html') === 0) {
                window.handleThankYou();
            } else if (window.location.href.indexOf('https://www.amazon.com/gp/buy/payselect/handlers/display.html') === 0) {
                window.handlePayment()
            }
        } else {
            setTimeout(function () {
                window.orderPageHandler();
            }, 2000);
        }
    }
}

// Review your order details and complete your order.