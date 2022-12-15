# bord__backend

This is the backend part of Project Bord, which mostly contains the work of **@pontusolsson03**, with a bit of help from **@BensinBosse** and some guidance from **@seetee**.


## Here´s basically how the API works

#### Routing - request and response
So basically, my API nowadays spits out HTML, fethced from a database just by using different URLs.
The database is set up so that each user har their own table. In that table they have pages, with a page id, a page name, the actual content of the page as well as two separate columns for any NFC cards; primary and secondary. The pages originally come from a folder with HTML files, but in the future they will come from GitHub repositories containing markdown files which are converted to HTML by GitHub (somehow).

We have three *main* directories, where the main things happen. Firstly we have the **controller**. In there we have two js-files; controller.js and router.js. Controller is basically the the first file deciding what happens when the API is called and how has access to it. Here the router is linked, and pointed to as the place no go next on load. In there we have basically only three routes, but they are *dynamic*! You see, we build our URIs on two different parameters. You could look at them like **localhost:8080/*parameter_1/parameter_2***. The first one, parameter_1, is called *userId*, and is used to decide which user is logged on, which means it is used to identify which table in the database to fetch data from. The second is used to identify what row on the database to fetch the content from, in other words what page from that user to load.

Two of the routes are GET-functions, used for fetching data from the API and displaying it in the frontend part of this project. The third route is a PUT-function, used for modifying data in the database. This route only takes the *userId*-parameter, and can be called from the frontend, where we have a UI for connecting NFC cards to pages. This is implemeneted to support the ability to chose which page to look at by scanning a card. Because of this functionality, the ability to choose which cards are going to show which page is also necessary. 

#### Fetching data
The actual connection and function for fetching data from the database is imported from the second *main* directory; **model**. Here we at the moment only have one file; *model.js*. Here is where the connection to the database is established, and is where the function for fetching as well as modifying data in the database based on the arguments passed is stored. These functions are exported, and imported in *router.js*. This way we don´t have too much code in the router itself, since that would make troubleshooting and reworking very hard and complicated.

#### Updating the contents of the database
The third *main* directory is **views**, where we find the file *updater.js*. This file is responsible for fetching the HTML files from the folder and storing them in the database. This function is at the moment of writing under reconstruction, and some whole new exiting functionality is on it´s way
