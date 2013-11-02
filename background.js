var opened = 0;
chrome.browserAction.onClicked.addListener(function(tab) {
  if(opened){
    var action_url = "javascript:document.getElementById('WebvisorApp').style.display='none';";
    opened = 0;
  }else{
    var action_url = "javascript:document.getElementById('WebvisorApp').style.display='block';";
    opened = 1;
  }
  //var action_url = "javascript:alert('i am here');";
  //console.log('s : '+opened);
 //  if(opened){
 //  	//chrome.extension.sendMessage({'openPlugin':opened}, function(response) { });
 //    chrome.runtime.sendMessage({'openPlugin':opened}, function(response) {
 //      //console.log(response.farewell);
 //    });

	// open = 0;
 //  }else{
 //  	//chrome.extension.sendMessage({'openPlugin':opened}, function(response) { });
 //    chrome.runtime.sendMessage({'openPlugin':opened}, function(response) {
 //     // console.log(response.farewell);
 //    });
	// open = 1;
 //  }
 // console.log('e : '+opened);
   chrome.tabs.update(tab.id, {url: action_url});

});

chrome.browserAction.setBadgeText({text: "10+"});