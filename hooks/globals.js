module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1280, 1024)
        done()
    },

    afterEach: (browser, done) => {
        browser.end()
        done()
    },
}