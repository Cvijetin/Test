const assert = require("assert");
var articleBestIds = [];
var articles = [];
var title;
var i = 0;
const MAIN_PAGE_URL = `${browser.options.baseUrl}`;
const ADVENT_PAGE_URL = `${browser.options.baseUrl}adventure/`;

describe("Adventures desktop testing", function() {
  it("Get IDs", function() {
    browser.url(MAIN_PAGE_URL);
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(3000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.call(
      async () =>
        await percySnapshot(browser, "Main-screen", { widths: [1280] })
    );
    browser.url(ADVENT_PAGE_URL);
    $("#main").waitForDisplayed();
    const textBest = $(".facetwp-template");
    articles = textBest.$$("article");
    articles.forEach(element => {
      postID = "#" + textBest.$$("article")[i].getAttribute("id");
      articleBestIds.push(postID);
      i++;
    });
    $("#siteFooter").scrollIntoView({ behavior: "smooth", block: "end" });
    browser.pause(3000);
    $("header").scrollIntoView({ behavior: "smooth", block: "start" });
    browser.call(
      async () =>
        await percySnapshot(browser, "Adventure-screen", { widths: [1280] })
    );
  }),
    it("Adventure desktop screenshots", function() {
      articleBestIds.forEach(postID => {
        const main = $(".site-content");
        $(postID).click();
        main.waitForDisplayed();
        title = browser.getTitle();
        $("footer").waitForDisplayed();
        $("footer").scrollIntoView({ behavior: "smooth", block: "end" });
        browser.pause(3000);
        $("header").scrollIntoView({ behavior: "smooth", lock: "start" });
        browser.pause(3000);
        browser.call(
          async () => await percySnapshot(browser, title, { widths: [1280] })
        );
        browser.url(ADVENT_PAGE_URL);
      });
    });
});
