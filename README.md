# bord__backend

This is the backend part of Project Bord, which mostly contains the work of **@pontusolsson03**, with a bit of help from **@BensinBosse** and some guidance from **@seetee**.


## Here´s basically how the API works

#### Routing - request and response
So basically, my API nowadays spits out JSON, fethced from a database, just by using different URLs.
The database is set up so that each user har their own table. In that table they have pages, with a page id, a page name and the actual content of the page. These pages originally come from a folder with markdown files. These files are converted to JSON (as strings) and are stored in the database.

We have three *main* directories, where the main things happen. Firstly we have the **controller**. In there we have two js-files; controller.js and router.js. Controller is basically the the first file deciding what happens when the API is called. Here the router is linked, and pointed to as the place no go next on load. In there we have basically only two routes, but they are *dynamic*! You see, we build our URIs on two different parameters. You could look at them like **localhost:8080/*parameter_1/parameter_2***. The first one, parameter_1, is called *userId*, and is used to decide which user is logged on, which means it is used to identify which table in the database to fetch data from. The second is used to identify what row on the database to fetch the content from, in other words what page from that user to load.

#### Fetching data
The actual connection and function for fetching data from the database is imported from the second *main* directory; **model**. Here we at the moment only have one file; *model.js*. Here is where the connection to the database is established, and the function for fetching data based on the arguments passed is stored. This function is exported, and imported in *router.js*. This way we don´t have too much code in the router itself, since that would make troubleshooting and reworking very hard and complicated.

#### From markdown to JSON
The third *main* directory is **views**, where we find the file *converter.js*. This file is responsible for fetching the markdown files from the folder, converting them to JSON and storing the JSON data in the database. This function is at the moment of writing this under reconstruction, and some whole new exiting functionality is on it´s way!


For now that is all it is, but hopefully we soon integrate the front end part of this project, which amongs others include the use of *NFC cards*!!
