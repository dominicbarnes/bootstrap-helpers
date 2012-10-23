# bootstrap-helpers

## Install

    $ npm install bootstrap-helpers

## Usage

The examples here are Express and EJS, but the underlying functions are just string
manipulation and are completely template/framework-agnostic. **:)**

```html
// Express 3
app.locals.bootstrap = require("bootstrap-helpers");
// Express 2
app.helpers("bootstrap", require("bootstrap-helpers"));

// view.ejs
<%- bootstrap.button("Call to Action", {
    style: "primary",
    size:  "large"
}) %>
<button class="btn btn-primary btn-large" type="button">Call to Action</button>

<%- bootstrap.container({ fluid: true }); %>
    <%- bootstrap.row({ fluid: true }) %>
    <div class="row-fluid">
        <%- bootstrap.col(4, { tag: "aside" }) %>
        <aside class="span4">
            Sidebar
        <%- bootstrap.colEnd("aside") %>
        </aside>

        <%- bootstrap.col(8, { id: "main" }) %>
        <div class="span8" id="main">
            <p>Hello World!</p>
        <%- bootstrap.colEnd() %>
        </div>
    <%- bootstrap.rowEnd() %>
    </div>
<%- bootstrap.containerEnd() %>
</div>
```

## Changelog

**0.0.1** Initial Release
