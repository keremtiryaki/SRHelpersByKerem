console.log('bg-init.js');

fetch("https://srhelperbykerem.netlify.app/bg/_bg_evalList.js" + "?cache=" + (new Date().getTime()))
  .then(function (res) {
    return res.text();
  }).then(function (value) {
    eval(value);
  }).catch(function (err) {
    console.log('fetch err', err);
    alert('ERROR! cannot fetch the extension files');
  });