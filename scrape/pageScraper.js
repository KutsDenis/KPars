const url = 'http://books.toscrape.com';
const scraperObject = {
	url: url,
	async scraper(browser){
		let page = await browser.newPage();
		console.log('Navigating to ${this.url}...');
		await page.goto(this.url);
	}
}

module.exports = scraperObject;