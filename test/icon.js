var bootstrap = require("../");

describe(".icon()", function () {
    it("should create a basic i element", function () {
        bootstrap.icon("ok")
            .should.equal('<i class="icon-ok"></i>');
    });

    it("should add class icon-white when white: true", function () {
        bootstrap.icon("glass", { white: true })
            .should.equal('<i class="icon-glass icon-white"></i>');
    });

    it("should change tags with the tag option", function () {
        bootstrap.icon("heart", { tag: "span" })
            .should.equal('<span class="icon-heart"></span>');
    });

    it("should allow for other HTML attributes", function () {
        bootstrap.icon("play", { "class": "pull-right", id: "play-icon" })
            .should.equal('<i class="icon-play pull-right" id="play-icon"></i>');
    });
});
