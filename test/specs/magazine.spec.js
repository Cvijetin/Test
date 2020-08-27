const assert = require("assert");
var articleBestIds = [];
var articles = [];
var title;
var i = 0;
const MAGAZINE_PAGE_URL = `${browser.options.baseUrl}magazine/`;

describe("Magazine destkop testing", function() {
  it("Get bestOfIDs", function() {
    browser.url(MAGAZINE_PAGE_URL);
    $("#main").waitForDisplayed();
    const textBest = $(".facetwp-template");
    articles = textBest.$$("article");
    articles.forEach(element => {
      postID = "#" + textBest.$$("article")[i].getAttribute("id");
      articleBestIds.push(postID);
      i++;
    });
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(5000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.pause(5000);

    browser.call(
      async () =>
        await percySnapshot(browser, "Magazine-screen", { widths: [1280] })
    );
  }),
    it("Magazine (bestofs and reviews) screenshots", function() {
      articleBestIds.forEach(postID => {
        const main = $(".site-content");
        $(postID).click();
        main.waitForDisplayed();
        title = browser.getTitle();
        $("footer").waitForDisplayed();
        $("footer").scrollIntoView({ behavior: "smooth", block: "end" });
        browser.pause(5000);
        $("header").scrollIntoView({ behavior: "smooth", lock: "start" });
        browser.pause(5000);
        browser.call(
          async () => await percySnapshot(browser, title, { widths: [1280] })
        );
        browser.url(MAGAZINE_PAGE_URL);
      });
    });
});
