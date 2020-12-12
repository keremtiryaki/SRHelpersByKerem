window.insertButtons = function () {
    var headerBodyElem = document.querySelector(".header-body");
    if (headerBodyElem) {
        var openOptionsBtn = window.document.createElement('button');
        openOptionsBtn.innerHTML = "options";
        openOptionsBtn.addEventListener("click", function () {
            window.onClickedExtensionButton();
        });
        headerBodyElem.insertBefore(openOptionsBtn, headerBodyElem.firstChild);

        var serialAutoStartElem = window.document.createElement('a');
        serialAutoStartElem.href = window.MAIN_SERIAL_LINK;
        // serialAutoStartElem.target = '_blank';
        serialAutoStartElem.innerHTML = "Serial Auto Start Now";
        
        headerBodyElem.insertBefore(serialAutoStartElem, headerBodyElem.firstChild);
    }
}