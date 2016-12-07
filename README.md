# reqpack

Require Pack, bulk dependency loading. Reduce clutter, less boilerplate.

Each package dependency becomes available on a single object as a camelCase name.

## Install

```js
npm i reqpack --save
```

## Usage

```js
var R   = require('reqpack')()
var app = R.express()
app.use(R.bodyParser.json())
```

Example using `package.json`:

```js
{
  "name": "example",
  "dependencies": {
    "body-parser": "^1.15.2",
    "express": "^4.14.0"
  },
```

Or for a specific list of dependencies to include, use:


```js
var R   = require('reqpack')(['express'])
var app = R.express()
app.use(R.bodyParser.json()) // throws error as R.bodyParser is undefined
```

## License

MIT
