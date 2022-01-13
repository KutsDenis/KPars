const url = 'http://books.toscrape.com'; // http://books.toscrape.com

const selectors = {
	pageInner: '.page_inner',
	eval: 'section ol > li',// section ol > li
	inStock: '.instock.availability > i', //.instock.availability > i
	textInStock: 'In stock'
};

const scraperObject = {
	url: url,
	async scraper(browser){
		let page = await browser.newPage();
		console.log('Navigating to ${this.url}...');
		await page.goto(this.url);
		// Wait for the required DOM to be rendered
		await page.waitForSelector(selectors.pageInner);
		// Get the link to all the required objects
		let urls = await page.$$eval(selectors.eval, links => {
			// Make sure the product to be scraped is in stock
			links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== 'In stock')
			// Extract the links from the data
			links = links.map(el => el.querySelector('h3 > a').href)
			return links;
		});
		console.log(urls);
	}
}

module.exports = scraperObject;