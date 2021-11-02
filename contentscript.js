chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'hello!') {
	  var retryCount = 0;
	  var interval = setInterval(() => {
		  const el = document.getElementsByClassName("js-issue-title")[0];
		  if (el && el.innerHTML) {
			el.innerHTML = el.innerHTML.replace(/^(SEM-\d+|CUST-\d+)(.*)$/, '<a href="https://jira.solarwinds.com/browse/$1" target="_blank" rel="noopener noreferrer">$1$2<\a>');
			//console.log(el);
			clearInterval(interval);
		  } else{
			  retryCount++;
			  if(retryCount === 5) {				  
				clearInterval(interval);
			  }
		  }
		  }, 1000); 
    }
});