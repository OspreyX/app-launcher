# OpenFin App Launcher

The OpenFin App Launcher is a window where you can easily access multiple apps built on the OpenFin Runtime directly from user’s desktop. The OpenFin App Launcher installs automatically  in the Taskbar (Windows) when installing one of the participating apps in the App Launcher initiative. Here is how it works:   

* Installs automatically with a OpenFin Runtime application download and installation

* OpenFin Launcher located in Windows Taskbar

* Apps launched from launcher prompt users to create a desktop shortcut

* Each application requires a new installer from OpenFin

* Email address required to gain access to apps in Launcher

* Only includes apps participating in the OpenFin Launcher initiative

* Applications provide a 30 day free trial access


## How to run (for now...)

* [create an OpenFin Application](https://github.com/openfin/generator-openfin)
* point the `url` key in the `/public/app.json` to localhost:9000
* create a directory to hold this project 
* `$ git clone` this project into the created directory 
* `$ npm install`
* `$ bower install`
* `$ grunt serve`
* click on OpenFin app desktop shortcut 
