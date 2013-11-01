window.onload = function(){
  	chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.create({url: 'http://dev.tadatuta.com:3000/?url=' + tab.url + '&' + tab.title});
    });
};