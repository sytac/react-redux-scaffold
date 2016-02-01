# react-redux-scaffold 

## TLTR
A React/Redux scaffold project with a nodeJs server and a babel/browserify building system.

** requires node > 5.x **

# Quick Start

### Just to check that everything is working
```
# Install the node dependencies
npm install

# Bundle the client code
npm run build

# Run the node server
npm start

# Open the web browser at http://localhost:5000
# You should then see a sample 'bootstrap' app
```

### Ok, is working but... I want to start to write my code ASAP

Everything you need to start to do some experiment and start to write your react app is:

##### Run the server 
Open a terminal and in the app folder run:

```npm start```

##### Run the watcher
Open another terminal and in the app folder 

```gulp watch```

##### Open your browser at http://localhost:5000
And you should see a sample boostrap app with a <b>"Edit me!!"</b> title in the center of the page.

##### Edit the code
 * Open your preferred IDE and start to open the ```client``` folder.
 * Open the `client/components/pages/home.js` file.
 * Change the `<h1>Edit me!!</h1>` text in something different.
 * Check the browser (the content should automatically refresh)

##### Have a lot of fun!!

# The project explained

The project is built using many technologies.

 * <b>Server</b>. Is a simple nodeJs/express app that just serves the index file that load the client app. It could be used as well as a complete server app, adding all the features needed.
 * <b>Client</b>. Is a redux/react-router/react basic app. It uses ```qwest``` module as a Ajax library and `react-bootstrap` module as a front-end component framework.
 * <b>Conf</b>. The configuration is managed by the `platform-config` and the `service-config` modules.
 * <b>Gulp tasks</b>. The Gulp task are managed by the `gulp-commonjs-tasks` module, that allow keep the tasks clean and easy to mantain.
 * <b>Test</b>. The test environment is built using mocha.
 * <b>Bundle</b>. The bundle is made using a browserify/babel workflow that provide react hot reloading.  

### File and folder structure

```
.
+-- client         // React App
|   +-- ...
+-- conf           // System configration
|   +-- platforms  // production/development/etc..
|       +-- ...
|   +-- services   // Additional services configuration
|       +-- ...
+-- public         // Public folder, static files
+-- server         // NodeJs App
|   +-- ...
+-- tasks          // Gulp tasks
|   +-- ...
+-- tests          // Common test files
|   +-- helpers
|       +-- ...
+-- index.js       // NodeJS entry point
+-- Gulpfile.js    // Gulp entrypoint
+-- .babelrc       // Babel config file
+-- .editornconfig // Editor config file
+-- .eslintrc      // Eslint config file
+-- README.md      // This file

```

## Build your bundle
The development enviroment uses browserify to build the bundle. At the end of the process the client files are copied in the ```public``` folder.

 * main.js (Contains the app)
 * build.js (Contains all the external libs)
 * styles.css (Contains all the styles)

#### Start the dev watch/build

To start the watch task just run:

```
gulp watch
```
The task run a build process and enable the watcher. The task is run by default in `development` mode and add a `react-transform-hmr` transform to the babel bundle process for the hot reloading process.<br> 
The build file doesn't work if the watcher is down. <br>
To build a no/watcher version run ```npm run build``` that simply uses the `production` environment and doesn't add the hot reload features to the code.

#### Environments

There are currently configured 2 environment:

 * production
 * development (default)

To set the environment just add NODE_ENV=some_env before the commands.

Eg. For the production building of the client
```
NODE_ENV=production gulp build
```
##### Production
 * the client is uglified
 * the client doesn't require the watcher to run, hot reloader is disabled

##### Development
 * the client is not uglified
 * the client require the watcher to run, hot reloader is enabled

The environments could be changed in the `config/platforms/targets` folder.
 
 * folders/build (The public folder location)
 * build/uglify (The uglify params, not uglified if missing)

The babel parameters could be changed in the `.babelrc` file.


## Config
The config is defined in th `config` folder.

The app uses the node modules `platform-config` (https://github.com/sytac/platform-config)

```
  // The data related to the application
  app: {
    name: 'Some application name',
    title: 'Some application title'
  },
  // The server data used in node/express
  server: {
    port: 5000
  },
  // The folder containing the static files
  folders: {
    build: path.join(__dirname, '../../../public')
  },
  // The build/bundle parameter
  build: {
    uglify: {
      global: true,
      sourcemap: false,
      mangle: true,
      compress: true
    }
  },
  // Additional services
  services: {
    html: {
      // The list of -link- tags added to the index.html server file 
      links: [
        {
          rel: 'stylesheet',
          crossorigin: 'anonymous',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
          integrity: 'sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7'
        },
        { rel: 'stylesheet', type: 'text/css', href: '/styles.css' }
      ],
      // The list of -scripts- tags added to the index.html server file
      scripts: [
        { type: 'text/javascript', src: '/main.js' }
      ]
    }
  }
```

## Gulp / Bundle
All the automation are created using Gulp with the task manager module `gulp-commonjs-tasks` (https://github.com/sytac/gulp-commonjs-tasks)

The tasks are placed in `tasks` folder.

Run `gulp help` to see le list of the tasks.

* <b>build</b> Bundle the client package and copy it in the public folder. Run 'npm run build' to prepare a production environment.
* <b>eslint</b> Run linting on the project sources.
* <b>mocha</b> Run the unit test.
* <b>watch</b> Build the sources and run the watcher with hot reload features.
