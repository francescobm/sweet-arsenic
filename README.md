# Sweer Arsenic Games Studio.

## Prerequisites
1. NodeJS min 4.2.X https://nodejs.org
2. Ruby min 2.2.X
 1. Ruby https://www.ruby-lang.org/en/downloads/
 2. Ruby on Windows http://rubyinstaller.org/downloads/
3. Sass installed (`gem install sass`)
4. Git https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
 
## Setup procedure
Open a command prompt at the **project folder** and execute following commands:

1. Run `npm install` to update your npm packages
2. Run `bower install` to update your bower packages
4. Run `gulp serve` to launch the project. A dist folder will be created and served on browser.
5. Run `gulp image` whenever you add an image into the src folder, this command will optimize images and copy them in the dist folder.
6. Run `firebase deploy` to deploy changes to test env https://sweet-arsenic.firebaseapp.com/#/

## Notes
- The app has been built with the following tech:
	- Gulp as task runner to build and serve the website on browser
	- Twitter Bootstrap as a layout framework
	- AngularJS to make page dynamic and handle data
	- Firebase to store data and deploy on testenv via command line
- You'll find the working files on src folder.
- Dist folder contains compiled files ready for deployment.
- The styling of layout is handled in src/assets/scss/partials.
- Once you run the command gulp serve, whenever you change and save a file in src folder a task will run and the website will be rebuilt in local, so that you can see immediately your changes.
- On src/app/index.es6 is where you'll see the application main file, here is defined routing, page templates and controllers.

