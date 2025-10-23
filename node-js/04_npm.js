/*
  npm (Node Package Manager) - NodeJS
 
  npm is the default package manager for Node.js and helps you manage project dependencies.
  It allows you to:
    - Install and update packages from the npm registry.
    - Manage versioning of packages.
    - Handle project dependencies efficiently.
    - Share your own packages with others.
 
  Key Components:

    - node_modules folder:
       Contains all installed packages and their dependencies.
       Should not be manually edited as changes can be overwritten.
       Typically excluded from version control (e.g., via .gitignore) to reduce repository size.
    
    - package.json file:
       Defines project metadata like name, version, and description.
       Lists project dependencies and development dependencies.
       Can include scripts to automate common tasks (e.g., testing, building).
    
    - package-lock.json file:
       Locks exact versions of installed packages and their dependencies.
       Ensures consistent installs across different environments.
       Automatically generated and updated by npm.
 
  Common npm Commands:
    - npm init               : Initialize a new Node.js project and create a package.json file.
    - npm install <package>  : Install a package and add it to dependencies.
    - npm uninstall <package>: Remove a package from your project.
    - npm install <package> --save-dev : Install a package as a development dependency.
 
  Example Workflow:
    $ npm init
    $ npm install express
    $ npm install mocha --save-dev
 
    package.json snippet:
    {
      "name": "my-project",
      "version": "1.0.0",
      "dependencies": {
        "express": "^4.17.1"
      },
      "devDependencies": {
        "mocha": "^8.2.1"
      }
    }

    
 
  npm helps you easily manage your project's dependencies and simplifies setup,
  making it easier to share and collaborate on Node.js projects.
 */
