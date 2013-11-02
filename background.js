var opened = 0;
chrome.browserAction.onClicked.addListener(function(tab) {
  // var action_url = "javascript:window.print();";
  console.log('s : '+opened);
  if(opened){
  	chrome.extension.sendMessage({'openPlugin':opened}, function(response) { });
	open = 0;
  }else{
  	chrome.extension.sendMessage({'openPlugin':opened}, function(response) { });
	open = 1;
  }
 console.log('e : '+opened);
  // chrome.tabs.update(tab.id, {url: action_url});

});

chrome.browserAction.setBadgeText({text: "10+"});