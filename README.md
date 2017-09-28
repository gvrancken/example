# Technologies we use:

* Built with Facebook React framework.

* npm (Node Package Manager) for resolving dependecies.

* Webpack, for packing all used js, images, sounds and json files.
The advantage of Webpack is that it only packs the required files
(it checks all the `requires` and `include` statements)
Webpack uses `loaders` to handle specific filetypes. These are described
in the `webpack.config` file.
We use different config files for development and production.
We tell Webpack to set a global variable DEBUG=true when developing.
This way, Webpack will automatically remove debug code from our files when building
production files and we can load different files when developing.

* Babel, to convert React's JSX and ES6 to javascript.
The `babel-preset-es2015` and `babel-preset-react` are plugins being used
by the `babel-loader` to translate ES6 and JSX syntax respectively.

* Howler, (abstraction layer on top of Web Audio API) to play audio
(At the time of writing, the `<audio>`-tag and SoundManager2 produce
too high a latency on Safari and Firefox a.o.).
Howler has an automatic fallback to HTML5 audio if need be.

* Axios, a simple, lightweight tool to load data from a back-end API.

* Webpack-dev-server, for hotloading during development.
This generates the website in memory and checks for changes. On changes
it refreshes the browser.

# Reading up

* [Setup React.js with Babel 6 and Webpack](http://blog.tamizhvendan.in/blog/2015/11/23/a-beginner-guide-to-setup-react-dot-js-environment-using-babel-6-and-webpack/)

* [React.js, Babel 6, Webpack and webpack-dev-server](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)

# Getting started

1. Make sure you have [Node.js](https://nodejs.org/en/) installed.
2. Install the project dependencies:
```
npm install
```
3. Build the required js files from the dependencies (through Webpack):
```
npm start
```
This shortcut is defined in package.json. See chapter Developing for more info.
4. Run index.html in the /src/client folder


# Developing

All js is packed with Webpack.
our index.html refers to the packed js files.

```
npm run dev
```

(This shortcut is defined in `package.json`)
Webpack will now pack all required files from /src.
Then Webpack-dev-server will serve the site from memory on port 9000.
View the site on `http://localhost:9000`

To actually build the physical project to disk, use

```
npm run build
```
Which will trigger `webpack -p` and build the minimized production version.
Use `webpack -d` to build the development version.

# Releasing

Build minimized files with Webpack using

`npm run build` (alias `webpack -p`)

This builds the project inside the /src/client/public folder.

# Useful information

We build our app/site inside the `/app` dir
Whatever we reference by using `require` or `import` will be packed and copied
(with a new name) to the `/public` directory by Webpack.
If we simply reference it directly, it will not be copied to /public
(which is probably unwanted behaviour)

Data we can use at compile-time can be found in the `assets` folder
Files from `assets` will be compiled (by Babel) and embedded in our js files (by Webpack)

Data we need to load from the backend (runtime) can be found in the `api` folder
Files from `api` will simply be copied to the /public folder on build (by Webpack's webpack-copy-plugin)
We copy them in stead of using a file-loader, because this way we are sure
that _all_ files from this directory and subdirectories will be copied to `public`.

* [Setup React.js with Babel 6 and Webpack](http://blog.tamizhvendan.in/blog/2015/11/23/a-beginner-guide-to-setup-react-dot-js-environment-using-babel-6-and-webpack/)

* [React.js, Babel 6, Webpack and webpack-dev-server](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
