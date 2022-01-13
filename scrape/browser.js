const puppeteer = require('puppeteer');

async function startBrowser(){
	let browser;
	try{
		console.log("Opening the browser");

		browser = await puppeteer.launch({
			headless: false, // GUI
			args: ["--disable-setuid-sandbox"],
			'ignoreHTTPSErrors': true // true for HTTP, and ignored any errors HTTPS
		});
	} catch (err){
		console.log("Could not create a browser instance => : ", err);
	}
	return browser;
}

module.exports = {
	startBrowser
};