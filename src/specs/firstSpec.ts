import { browser } from "protractor";

describe("Protractor demo app", function() {
    it("should check the title", function () {
        browser.get("https://google.com");

        expect(browser.getTitle().toEqual("Google"));
    })
});
