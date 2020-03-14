////////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
////////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: browser => browser.init(),

  "e2e tests using page objects": browser => {
    const homepage = browser.page.homepage();
    homepage.waitForElementVisible("@appContainer");

    const app = homepage.section.app;
    app.assert.elementCount("@logo", 3);
    app.expect.section("@headline").to.be.visible;
    app.expect
      .section("@headline")
      .text.to.match(/^Library$/);

    browser.end();
  },
};
