const assert = require("assert");
const MAIN_PAGE_URL = `${browser.options.baseUrl}`;
describe("57web forms testing", function() {
  it("Forms", function() {
    browser.url(MAIN_PAGE_URL);
    $("#menu-item-7996").click();
    $("input[name='location']").setValue("Amherst");
    $("#date").click();
    $(".ui-icon-circle-triangle-e").click();
    $(".ui-state-default").click();
    $(".quantity__button--increment").click();
    $("#fullName").setValue("Test");
    $("#email").setValue("cvitqa1@gmail.com");
    $("input[name='phone']").setValue("0996606367");
    $("textarea").setValue("This is automated test, please ignore");
    $("#inquiry-submit-button").click();
    browser.pause(5000);
  });
});
