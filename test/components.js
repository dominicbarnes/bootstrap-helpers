var _ = require("lodash"),
    bootstrap = require("../");

describe("components", function () {
    describe(".breadcrumbs()", function () {
        it("should return a full breadcrumbs structure", function () {
            bootstrap.breadcrumbs([
                { title: "Home", href: "/" },
                { title: "Here", active: true }
            ]).should.equal('<ul class="breadcrumb"><li><a href="/">Home</a> <span class="divider">/</span></li><li class="active">Here</li></ul>');
        });

        it("should allow for the divider to be overridden", function () {
            bootstrap.breadcrumbs([
                { title: "Home", href: "/" },
                { title: "Somewhere", active: true }
            ], { divider: "&rarr;" })
                .should.equal('<ul class="breadcrumb"><li><a href="/">Home</a> <span class="divider">&rarr;</span></li><li class="active">Somewhere</li></ul>');
        });

        it("should include additional HTML attributes on the ul.breadcrumb", function () {
            bootstrap.breadcrumbs([
                { title: "Home", href: "/" },
                { title: "Somewhere", active: true }
            ], { id: "main-breadcrumbs", "class": "my-class" })
                .should.equal('<ul class="breadcrumb my-class" id="main-breadcrumbs"><li><a href="/">Home</a> <span class="divider">/</span></li><li class="active">Somewhere</li></ul>');
        });
    });

    _.each([ "badge", "label" ], function (component) {
        describe("." + component + "()", function () {
            it("should output a span." + component + " tag", function () {
                bootstrap[component]("Test")
                    .should.equal('<span class="' + component + '">Test</span>');
            });

            it("should include an additional style class", function () {
                bootstrap[component]("Test", { style: "inverse" })
                    .should.equal('<span class="' + component + ' ' + component + '-inverse">Test</span>');
            });

            it("should allow the tag to be overridden", function () {
                bootstrap[component]("BOLD", { tag: "b" })
                    .should.equal('<b class="' + component + '">BOLD</b>');
            });

            it("should include addition HTML attributes", function () {
                bootstrap[component]("A", { id: "some-id", "class": "some-class" })
                    .should.equal('<span class="' + component + ' some-class" id="some-id">A</span>');
            });
        });
    });
});
