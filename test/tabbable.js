var bootstrap = require("../");

describe(".tabbable", function () {
    describe(".begin()", function () {
        it("should return a div.tabbable opening tag", function () {
            bootstrap.tabbable.begin().should.equal('<div class="tabbable">');
        });

        it("should include the tabs-{orientation} class", function () {
            bootstrap.tabbable.begin({ orientation: "below" })
                .should.equal('<div class="tabbable tabs-below">');
        });
    });

    describe(".end()", function () {
        it("should return a closing div tag", function () {
            bootstrap.tabbable.end().should.equal('</div>');
        });
    });

    describe(".nav()", function () {
        it("should return a ul.nav.nav-tabs opening tag", function () {
            bootstrap.tabbable.nav().should.equal('<ul class="nav nav-tabs">');
        });
    });

    describe(".navEnd()", function () {
        it("should return a closing ul tag", function () {
            bootstrap.tabbable.navEnd().should.equal('</ul>');
        });
    });

    describe(".navItem()", function () {
        it("should return li>a[href=/][data-toggle=tab]", function () {
            bootstrap.tabbable.navItem("Home", { href: "/" })
                .should.equal('<li><a data-toggle="tab" href="/">Home</a></li>');
        });

        it("should return a li.active>a[href=/][data-toggle=tab]", function () {
            bootstrap.tabbable.navItem("Home", { href: "/", active: true })
                .should.equal('<li class="active"><a data-toggle="tab" href="/">Home</a></li>');
        });
    });

    describe(".content()", function () {
        it("should return a div.tab-content opening tag", function () {
            bootstrap.tabbable.content().should.equal('<div class="tab-content">');
        });
    });

    describe(".contentEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.tabbable.contentEnd().should.equal('</div>');
        });
    });

    describe(".pane()", function () {
        it("should return a div.tab-pane opening tag", function () {
            bootstrap.tabbable.pane().should.equal('<div class="tab-pane">');
        });

        it("should add a fade class", function () {
            bootstrap.tabbable.pane({ fade: true })
                .should.equal('<div class="tab-pane fade">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.tabbable.pane({ id: "my-tab", "class": "my-class" })
                .should.equal('<div class="tab-pane my-class" id="my-tab">');
        });

        it("should allow the tag to be overridden", function () {
            bootstrap.tabbable.pane({ tag: "section" })
                .should.equal('<section class="tab-pane">');
        });
    });

    describe(".paneEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.tabbable.paneEnd().should.equal('</div>');
        });

        it("should allow the tag to be overridden", function () {
            bootstrap.tabbable.paneEnd("section").should.equal('</section>');
        });
    });
});
