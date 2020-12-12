window.MAIN_SERIAL_LINK = "https://app.sellerrunning.com/orders?Sort=purchasedate_asc&Status=Sold#serial_auto_start_now";
window.current_c_data = {};
chrome.runtime.sendMessage({
    action: 'getData',
}, function (response) {
    console.log("getData", arguments)
    window.current_c_data = response;
    window.startExtensionUrlInterval();
});

var lastUrl = "";
window.startExtensionUrlInterval = function () {
    setInterval(function () {
        if (lastUrl !== window.location.href) {
            lastUrl = window.location.href;
            window.runAfterExtensionDataReady();
        }
    }, 1000);
}