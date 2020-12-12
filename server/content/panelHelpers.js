window.onClickedExtensionButton = function () {
    if (window._content_panel_divContainerElem) {
        if (window._content_panel_divContainerElem.style.display === 'block') {
            window._content_panel_divContainerElem.style.display = 'none';
        } else {
            window._content_panel_divContainerElem.style.display = 'block';
        }
    } else {
        window._content_panel_divContainerElem = window.document.createElement('div');
        window._content_panel_divContainerElem.style.width = '320px';
        window._content_panel_divContainerElem.style.position = 'fixed';
        window._content_panel_divContainerElem.style.right = '0px';
        window._content_panel_divContainerElem.style.top = '0px';
        window._content_panel_divContainerElem.style.bottom = '0px';
        window._content_panel_divContainerElem.style.backgroundColor = 'white';
        window._content_panel_divContainerElem.style.border = '1px solid black';
        window._content_panel_divContainerElem.style.display = 'block';
        window._content_panel_divContainerElem.style.zIndex = 999999 + 1;
        window._content_panel_divContainerElem.style.overflow = 'auto';
        window.document.body.appendChild(window._content_panel_divContainerElem);
        return fetchResourceAsText("https://srhelperbykerem.netlify.app/content/panel.html")
            .then(function (result) {
                window._content_panel_divContainerElem.innerHTML = result;
                setTimeout(function () {
                    window.initPanelData();
                    window.addPanelListeners();
                });
            });
    }
}

window.initPanelData = function () {
    chrome.runtime.sendMessage({
        action: 'getData',
    }, function (response) {
        console.log("getData", arguments)
        window.current_c_data = response;
        var autostart_wait_until_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel select#autostart_wait_until");
        autostart_wait_until_elem.value = window.current_c_data.autostart_wait_until;

        var selectBestForExpeditedShippings_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#selectBestForExpeditedShippings");
        selectBestForExpeditedShippings_elem.checked = window.current_c_data.selectBestForExpeditedShippings;
        
        var isExtensionPaused_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#isExtensionPaused");
        isExtensionPaused_elem.checked = window.current_c_data.isExtensionPaused;
        
        var estimated_total_treeshold_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#estimated_total_treeshold");
        estimated_total_treeshold_elem.value = window.current_c_data.estimated_total_treeshold;
        
        var cardNumber_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#cardNumber");
        cardNumber_elem.value = window.current_c_data.cardNumber;
    });
}

window.addPanelListeners = function () {
    var saveButtonElem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel #save-btn");
    saveButtonElem.addEventListener("click", function () {

        var autostart_wait_until_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel select#autostart_wait_until");
        window.current_c_data.autostart_wait_until = parseInt(autostart_wait_until_elem.value);

        var selectBestForExpeditedShippings_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#selectBestForExpeditedShippings");
        window.current_c_data.selectBestForExpeditedShippings = selectBestForExpeditedShippings_elem.checked;
        
        var isExtensionPaused_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#isExtensionPaused");
        window.current_c_data.isExtensionPaused = isExtensionPaused_elem.checked;

        var estimated_total_treeshold_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#estimated_total_treeshold");
        window.current_c_data.estimated_total_treeshold = parseFloat(estimated_total_treeshold_elem.value);
        
        var cardNumber_elem = window._content_panel_divContainerElem.querySelector("#sr-helper-kerem-panel input#cardNumber");
        window.current_c_data.cardNumber = parseFloat(cardNumber_elem.value);

        chrome.runtime.sendMessage({
            action: 'saveData',
            data: window.current_c_data
        });
    });

}