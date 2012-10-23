var bootstrap = require("../");

describe(".nav", function () {
    describe(".begin()", function () {
        it("should return a ul.nav opening tag", function () {
            bootstrap.nav.begin().should.equal('<ul class="nav">');
        });

        it("should add a nav-{type} class", function () {
            bootstrap.nav.begin({ type: "tabs" })
                .should.equal('<ul class="nav nav-tabs">');
        });

        it("should add a nav-stacked class", function () {
            bootstrap.nav.begin({ stacked: true })
                .should.equal('<ul class="nav nav-stacked">');
        });

        it("should add a nav-list class", function () {
            bootstrap.nav.begin({ list: true })
                .should.equal('<ul class="nav nav-list">');
        });
    });

    describe(".end()", function () {
        it("should return a ul closing tag", function () {
            bootstrap.nav.end().should.equal('</ul>');
        });
    });

    describe(".item()", function () {
        it("should return a basic li", function () {
            bootstrap.nav.item("Hello").should.equal('<li>Hello</li>');
        });

        it("should add an active class if active is true", function () {
            bootstrap.nav.item("Profile", { active: true })
                .should.equal('<li class="active">Profile</li>');
        });

        it("should add a disabled class if disabled is true", function () {
            bootstrap.nav.item("Test", { disabled: true })
                .should.equal('<li class="disabled">Test</li>');
        });

        it("should add a link if an href is provided", function () {
            bootstrap.nav.item("Home", { href: "/" })
                .should.equal('<li><a href="/">Home</a></li>');
        });

        it("should include additional HTML attributes on the link", function () {
            bootstrap.nav.item("Home", { href: "/", link: { "class": "test" } })
                .should.equal('<li><a class="test" href="/">Home</a></li>');
        });
    });

    describe(".header()", function () {
        it("should return an li.nav-header", function () {
            bootstrap.nav.header("List Header")
                .should.equal('<li class="nav-header">List Header</li>');
        });
    });

    describe(".divider()", function () {
        it("should return an li.divider", function () {
            bootstrap.nav.divider().should.equal('<li class="divider"></li>');
        });
    });
});
