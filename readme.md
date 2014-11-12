--------------------------------------------------------------
Environment Setup on Computer
(with existing Bower & Grunt project files )
--------------------------------------------------------------
* ONLY IF COMPUTER ENVIRONMENT ISN'T SET UP


Bower

- Bower depends on Node and npm. It's installed globally using npm:
npm install -g bower


Grunt

- Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager. Install Grunt by using:
npm install -g grunt-cli 

(If imagemin gives errors you may need to manually install jpegtran (http://www.phpied.com/installing-jpegtran-mac-unix-linux/ note: use version imagemin asks for in error file.))


Compass

- Install Compass:
Gem install compass

(you may need to use sudo)
(you may also need to uninstall older versions of compass and sass and re-instal compass)


Mamp

- Create a new host
- Choose the "dev" folder in the directory


--------------------------------------------------------------
Create Repository
--------------------------------------------------------------


Beanstalk

– Create a repository in Beanstalk


Tower

- Create Local Repository. Browse & select the directory containing our files
- Stage & Commit all files
- Add a remote repository (In left panel, right click Remotes. Click "Add Remote Repository". Name it "Beanstalk". Copy the repository URL from Beanstalk and paste it in Tower.)
- Add Tracking Connection & publish (Drag Master Branch into Remotes > Beanstalk in left panel)


--------------------------------------------------------------
Downloading all dependencies
--------------------------------------------------------------


In the Terminal cd to directory

Bower

- With the bower.json & .bowerrc files in the directory download all dependent components:
bower install


Grunt
- With Gruntfile.js, package.json & .jshintrc files in the directory download all grunt tasks:
npm install

* No new or modified files should appear in Tower


--------------------------------------------------------------
Keeping dependencies up to date
--------------------------------------------------------------

Bower

- In the Terminal cd to directory
- Update all bower dependencies
bower update

Grunt

* Download npm-check-updates initial download (only needs to be done once on your computer )
npm install -g npm-check-updates

- In the Terminal cd to directory
- Then type the following in the Terminal to check for updates which will show a list of outdated packages
npm-check-updates

- Update the package.json file
npm-check-updates -u

- Update the all Grunt dependencies
npm install


--------------------------------------------------------------
Content Management System
--------------------------------------------------------------


Craft CMS

- Download Craft (http://buildwithcraft.com/)
- Unzip. Put craft & public folders in our directory
- Rename htaccess to .htaccess
- Copy the index.php, robots.txt, .htaccess from the "public" folder to the "dev" folder (delete web.config - unless we're using a windows server)
- Follow the install procedures here: http://buildwithcraft.com/docs/installing

* You may want to save an SQL dump of the database


Tower
- Stage & Commit


---------------------------------------
Begin watching tasks
---------------------------------------


Terminal
- Ensure you are in the correct directory

- Run Grunt to begin task watching:
grunt


----------------------------------------
Publish (concat & minify using Grunt)
----------------------------------------


Terminal

- In terminal publish the file:
grunt publish

This will minify/concat/copy all html, php, image, js & css files in the "html" folder. You can choose a differrent directory by editing the Gruntfile.js file.

-------
Sample code for pattern-library.html (this will minify & concat app.css & app_override.css to app.min.css)
    <!-- build:css css/app.min.css -->
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/app_override.css">
    <!-- endbuild -->
-------


--------------------------------------------
What to upload to Staging / Production
--------------------------------------------


Terminal

– Make sure to run:
grunt publish


Mamp

- Change destination folder in Mamp to "public" folder to test minified version.


Craft
- Your template code needs the links to the concatinated css & js files


Tower
- Stage, Commit & Push your files


Beanstalk
- Set up beanstalk to deploy only the "craft" & "public" folders to the Staging or Production folder.




