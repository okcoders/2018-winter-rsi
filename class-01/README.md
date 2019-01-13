# Class 01

## ES6

[article](https://webapplog.com/es6/) on some key es6 features

- const
- template strings
- arrow functions

## Classes

[class docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

important pieces of classes for react:
- constructor (and new)
- properties
- methods
- super and extension

## React Quick Start

- [jsx](https://reactjs.org/docs/introducing-jsx.html)
- [functional component](https://reactjs.org/docs/components-and-props.html)
- [adding](https://reactjs.org/docs/add-react-to-a-website.html) react (the hard way)
- adding react the easy way with create-react-app (see section below)
- [class components](https://reactjs.org/docs/components-and-props.html)
- [events](https://reactjs.org/docs/handling-events.html), [conditional
  rendering](https://reactjs.org/docs/conditional-rendering.html), [content
  collections](https://reactjs.org/docs/lists-and-keys.html), and [forms](https://reactjs.org/docs/forms.html)

## Create React App

Setting up a new react project requires stringing together a lot of technology
and packages to get a nice development environment. There is a repo called
[create-react-app](https://github.com/facebook/create-react-app) that is meant
to make that process much simpler.

For example if you run:
```
npx create-react-app exemplar-project
```

npx only exists in newer versions of node, so if the above command doesn't work
you will need to do the following:

```
npm install -g create-react-app
create-react-app exemplar-project
```

Once that is done you will have a new folder with a lot of stuff in it. Create
react app went ahead and gave us a basic template to start making a new app with
react, and also gave us a nice development workflow with a server that
autorefreshes, and a nice testing framework called jest.

## Homework

If you are not familiar with any of the below please read up:

- [http](https://www.httpwatch.com/httpgallery/introduction/)
- [rest](https://www.codecademy.com/articles/what-is-rest)
- [json](https://www.w3schools.com/js/js_json_intro.asp)
- [ajax](https://codeburst.io/a-gentle-introduction-to-ajax-1e88e3db4e79)
- [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [html tags](https://www.w3schools.com/tags/ref_byfunc.asp)

If you are not familiar with javascript, I suggest this [book](https://eloquentjavascript.net/)

Also, please review the react [documentation](https://reactjs.org/docs/hello-world.html), and consider doing their
[tutorial](https://reactjs.org/tutorial/tutorial.html).
