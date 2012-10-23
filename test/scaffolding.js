var bootstrap = require("../");

describe("scaffolding", function () {
    describe(".container()", function () {
        it("should return a .container opening tag", function () {
            bootstrap.container().should.equal('<div class="container">');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.container({ tag: "section" })
                .should.equal('<section class="container">');
        });

        it("should use the container-fluid class if fluid option is true", function () {
            bootstrap.container({ fluid: true })
                .should.equal('<div class="container-fluid">');
        });
    });

    describe(".containerEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.containerEnd().should.equal('</div>');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.containerEnd("section").should.equal('</section>');
        });
    });

    describe(".row()", function () {
        it("should return a div.row opening tag", function () {
            bootstrap.row().should.equal('<div class="row">');
        });

        it("should use the row-fluid class if fluid option is true", function () {
            bootstrap.row({ fluid: true }).should.equal('<div class="row-fluid">');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.row({ tag: "article" }).should.equal('<article class="row">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.row({ id: "main", "class": "content" })
                .should.equal('<div class="row content" id="main">');
        });
    });

    describe(".rowEnd()", function () {
        it("should return a closing div tag", function () {
            bootstrap.rowEnd().should.equal('</div>');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.rowEnd("article").should.equal('</article>');
        });
    });

    describe(".column()", function () {
        it("should have .col() as an alias", function () {
            bootstrap.column.should.equal(bootstrap.col);
        });

        it("should return a div.span4 opening tag", function () {
            bootstrap.column(4).should.equal('<div class="span4">');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.column(4, { tag: "aside" })
                .should.equal('<aside class="span4">');
        });

        it("should append .offset6 when offset option passed", function () {
            bootstrap.column(3, { offset: 6 })
                .should.equal('<div class="span3 offset6">');
        });

        it("should include additional HTML attributes", function () {
            bootstrap.column(8, { id: "main", "class": "content" })
                .should.equal('<div class="span8 content" id="main">');
        });
    });

    describe(".columnEnd()", function () {
        it("should have .colEnd() as an alias", function () {
            bootstrap.columnEnd.should.equal(bootstrap.colEnd);
        });

        it("should return a closing div tag", function () {
            bootstrap.columnEnd().should.equal('</div>');
        });

        it("should allow for the tag to be overridden", function () {
            bootstrap.columnEnd("aside").should.equal('</aside>');
        });
    });
});
