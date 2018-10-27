window.parseQueryString = function() {
  const str = window.location.search;
  const objURL = {};

  str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function(
    $0,
    $1,
    $2,
    $3
  ) {
    objURL[$1] = $3;
  });
  return objURL;
};

window.stage = window.parseQueryString()['stage'];

// www.google.com?stage=dev
if (window.stage === 'dev') {
  document.querySelector('body').classList.add('devBucket');
}
