## react-inline-style-loader 
An __experimental__ webpack loader that converts css to objects that work well in react-inline-style.

It uses [cssom](https://github.com/NV/CSSOM) as the css parser and renames `.classes {}` to `_classes {}` and `#ids {}` to `__ids {}`

Currently in very alpha/experimental stage, if development continues I'll publish to npm and update this readme. If you're looking for something like this to use in your app, there's a similar project called  [cssobjects-loader](https://github.com/DoubleU23/cssobjects-loader) you might want to check out. Or if you want to develop on this one just submit a PR and I'll add you as a contributor.


## Play around with it
`git clone https://github.com/johncomposed/react-inline-style-loader.git` and run `npm run test` (add `--silent` to the end of that to not get that annoying npm message on failing tests)

Or try it out with 
`npm install git://github.com/johncomposed/react-inline-style-loader.git`

## Require patterns
```js
var modules = require("react-inline-style!./example.css");
```

## License
MIT
