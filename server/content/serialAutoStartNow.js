window.serialAutoStartNowFunction = function() {
    var dateElem = document.querySelector("body > div > div.container > div > div > div.card > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(7) > span");
    console.log('dateElem.innerText:', dateElem.innerText);
    if (
        dateElem &&
        (
            (
                dateElem.innerText.indexOf('saat önce') !== -1 &&
                parseInt(dateElem.innerText) >= window.current_c_data.autostart_wait_until
            ) ||
            (
                dateElem.innerText.indexOf('hours ago') !== -1 &&
                parseInt(dateElem.innerText) >= window.current_c_data.autostart_wait_until
            ) ||
            dateElem.innerText.indexOf('dün') !== -1 ||
            dateElem.innerText.indexOf('yesterday') !== -1 ||
            dateElem.innerText.indexOf('gün önce') !== -1 ||
            dateElem.innerText.indexOf('day ago') !== -1 ||
            dateElem.innerText.indexOf('days ago') !== -1
        )) {
        var orderElem = document.querySelector("body > div > div.container > div > div > div.card > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(8) > a");
        if (orderElem) {
            orderElem.removeAttribute('target');
            window.simulateClick2(window, orderElem);
        }
    }
}