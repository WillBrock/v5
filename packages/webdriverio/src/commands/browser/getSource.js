/**
 *
 * Get source code of the page. This command won't work in mobile environments for native apps. If you are running
 * hybrid tests make sure that you are in the webview before calling this command.
 *
 * <example>
    :getSource.js
    it('should get the source of the html document', function () {
        browser.url('http://webdriver.io');

        var source = browser.getSource();
        console.log(source); // outputs: "<!DOCTYPE html>\n<title>Webdriver.io</title>..."
    });
 * </example>
 *
 * @alias browser.getSource
 * @return {String} source code of current website
 * @uses protocol/source
 * @type property
 *
 */

export default function getSource() {
    return this.getPageSource()
}
