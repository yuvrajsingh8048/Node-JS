## Definition of Node js 

* Open Source
* Javascript Runtime Enviroment
* Event Driven
* Blocking Non-Blocking I/O model
* Internally code written by Javascript and C/C++
* Input Output (File System)

## Example in Real World

* Realtime Application ( Chat process )
* Single Page Application
* IOT ( Internet of Things ) apps
* Data Streaming Apps

## Architecture
![Architecture Image](Architecture.png)

The architecture components comprises two main concepts : an Asynchronous model that resembles the event based approach and non-blocking I/O operation.

Components are - 
* Request
* Node.js Server
* Event Queue
* Event Loop
* Worker Thread or Thread Pool
* External Resources

## Advantages of Node.js

* Node js is asynchrounous model and non-blocking I/O model operation that improves the scalabiltiy and performance of web application.

* Node js can handle multiple request easily without requiring multiple thread, consuming less memory and resources.

*  Node js is also flexible with multiple framework, which make the devlopment easier.

## NPM ( Node Package Manager )
* Default package manager of Node js
* Package management
* Command line interface
* Version Control
* Manage dependencies
* Publishing and sharing packages
* Scripts and automate

### npm init
used to initialize new or existing npm package
```
<!-- For manually package name -->

npm init

<!-- For auto package name -->

npm init -y
```

### Installing Package in node

```
npm install package_name

npm install package1, package2, package3

npm install package_name --save

npm install package_name --save-dev
```
### Uninstalling Package in node

```
npm uninstall package_name

npm uninstall package1, package2, package3

npm uninstall package_name --save

npm uninstall package_name --save-dev
```

## Package.json
* Serves as the centerpiece of node js
* Project's manifest file
* Divided in two category:
 1. identifying metadata property ( which include author's name, current version, project's name, license and project description )
2. functional metadata property ( which include scripts being used, project dependencies, starting point of the module, repository link )


## Nodejs Path Module
* allows you to interact with file path easily
* property and methods used to manipulate path in the file system

Handy Path Method
```
path.basename(path, [ext])
path.dirname(path)
path.extname(path)
path.formath(pathObj)
path.isAbsolute(path)
path.join(...path)
path.parse(path)
path.relative(from, to)
path.resolve(...path)
```

## File System
* Node js includes built in module called FS ( File System )
* allows users to manage files which includes creating, reading, deleting, and performing other operations too.

* ```var fs = require( 'fs' ) ```

#### Notes :
Synchronous : involves blocking operations that wait for each operations to complete to executing for the next one

Asynchronous : involves non-blocking operation that execute all operation all operation at once w/o waiting for next operation to complete.
