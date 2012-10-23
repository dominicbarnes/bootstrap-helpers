# bootstrap-helpers

## Install

    $ npm install bootstrap-helpers

## Usage

The examples here are Express and EJS, but the underlying functions are just string
manipulation and are completely template/framework-agnostic. **:)**

    // Express 3
    app.locals.bootstrap = require("express-bootstrap-helpers");
    // Express 2
    app.helpers("bootstrap", require("express-bootstrap-helpers"));

    // view.ejs
    <%- bootstrap.button("Call to Action", {
        style: "primary",
        size:  "large"
    }) %>
    <button class="btn btn-primary btn-large" type="button">Call to Action</button>

    <% var container = bootstrap.container({ fluid: true }); %>
    <%- container.open() %>
    <div class="container-fluid">
        <% var row = bootstrap.row({ fluid: true }) %>
        <%- row.open() %>
        <div class="row">
            <% bootstrap.column(4, { tag: "aside" }).render("Sidebar") %>
            <aside class="span4">Sidebar</aside>

            <% var content = bootstrap.column(8, { id: "main" }) %>
            <%- content.open() %>
            <div id="main" class="span8">
                <p>Hello World!</p>
            <%- content.close() %>
            </div>
        <%- row.close() %>
        </div>
    <%- container.close() %>
    </div>

## Changelog

** 0.0.3 **
 - Adding components
 - Reworking form API some

** 0.0.1 **
 - Initial commit, detailed documentation will be coming in the future, reference the source for now
