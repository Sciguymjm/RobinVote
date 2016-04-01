// ==UserScript==
// @name         Robin Vote Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       /u/sciguymjm
// @match        https://www.reddit.com/robin
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

$(document).ready(function() {
	$('#robinSendMessage')[0][0].value = '/vote grow'; $('#robinSendMessage')[0][1].click();
});