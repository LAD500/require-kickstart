# require-kickstart
RequireKickstart is a project template built to allow a quick up and running approach to building AMD based javascript apps. Its a very simple project skeleton aimed at giving quick access to build processes that supply a range of checks, tests, and optimisation of CSS and JS in the final output of your project.

**Prerequisites - You need to have Node, Ruby, and RubyGems installed**

**To get the project** - download the zip file to get and unversioned copy. If you want to use this as the start of your own development without contributing to this project be sure to delete the .git file.

Once unzipped cd into the project and run 
```
npm install
```
then run 
```
grunt setUpDev
```
This will organise your src file so that it can run the basic JS app. All your production files should reside in the src folder with any units tests being in the test folder (see example).

**What comes packaged in the project**
- Sass (using Compass)
- Bootstrap 3
- JQuery
- RequireJS
- Unit testing with karma/jasmine
- Test servers
    - For launching your project from both the src and build folders
    - For testing and build your apps against static data
- Code metrics
- CSS concatenation and minification (via Compass)
- JS concatenation and minification (via r.js)


**Commands of note**
- **grunt test**  - runs tests and lint checks.
- **grunt build** - creates a new folder in your project and builds and optimised version of you JS file there.
- **grunt launchSrc** - starts a node server that runs your app from the src folder. It then launches the index page in Google Chrome.
- **grunt launchBuild** - runs the build job and starts a node server that runs your app from the build folder. It then launches the index page in Google Chrome.
- **grunt launchPlato** - runs the Plato metrics job and then opens the index page of that report in Google Chrome.

Note: - this is a continious work in progress not a finished product.
