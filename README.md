# ng-mini-ws
This will provide you the basic structure for creating small angularjs projects. It uses jquery, angularjs, angular-route and bootstrap.

## Installation
In order to use this repo, check if 
* Node and npm
* bower
* git
* grunt

is installed on your system. Steps to get up and running - 

1. Chnage directory to your work space ``` cd <<proj folder>> ```
2. Clone the repo ``` git clone https://github.com/linux-nerd/ng-mini-ws.git ```
3. Change directory to **ng-mini-ws** ``` cd ng-mini-ws ```
4. Execute ``` npm install ```
5. Execute ``` bower install ```
6. Then execute ``` grunt startDev ```
7. And finally execute ``` grunt ```

That's it. You have correctly configured your workspace.

## What exactly is happening with all those commands?
Lets talk about the folder structure first
ng-mini-ws
	|_ package.json
	|_ bower.json
	|_ gruntfile.js
	|_ .gitignore
	|_ public
		|_ index.html
		|_ scripts
			|_ app.js
		|_ css
			|_ main.css
		|_ views

The running server points to public directory. This means that > public/index.html have access to everything inside public folder.
But it has no access to anything above the public directory.

``` npm install ``` command will download the dev dependencies mentioned in the package.json file. It will create a node_modules directory at the same level as public dir.
``` bower install ``` command will download the dependencies mentioned in bower.json file. It will create a bower_components directory at the same level as public dir.
``` grunt startDev``` command will create a vendor directory in both public/scripts folder and public/css folder and will copy the files from bower_components to the respective folders.
``` grunt ``` command will start a server with public as the document root and open public/index.html in a browser.

### What if new bower package is installed?
If new bower package is installed then the entry has to made in gruntfile.js for bowercopy task
``` scripts: {
                options: {
                    destPrefix: 'public/scripts/vendor'
                },
                files: {
                    'jquery.js': 'jquery/jquery.js',
                    'angular.js': 'angular/angular.js',
                    'angular-route.js': 'angular-route/angular-route.js',
                    'bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
					'filename to be there in public/scripts/vendor': 'relative path to the file inside bower_components'
                }
```

Apart from this you need to make an entry of the particular script in index.html.


## Need for improvement
Need to automate bowercopy task.