/*
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.src= 'ssparkle.js';
head.appendChild(script);
*/

chrome.browserAction.onClicked.addListener(function(tab) {
 
 
chrome.tabs.executeScript(null,{file:"replace.js"});

/*
 // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
 */
  
});
