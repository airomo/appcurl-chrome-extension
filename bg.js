chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
		var activeTab = arrayOfTabs[0];
		var urlForSearch = activeTab.url;

		var isUrlValid = function( url ) {
			var urlChecker = /http|https:+/;//TODO: put url RE
  			return urlChecker.test( url );
		};

		var detectOwnDomains = function( url ) {
			return url.indexOf('http://static.airomo.com/widgets/search/results.html') != -1;
		};

		if( detectOwnDomains( urlForSearch ) ) {
			alert('Please, use search field to search for applications.');
		} else {
			if( !isUrlValid( urlForSearch ) ) {
				urlForSearch = 'airomo';
			}
			window.open("http://static.airomo.com/widgets/search/results.html?q="+urlForSearch);
		}
	});
});