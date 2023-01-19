# bord\_\_backend

This is the backend part of Project Bord, which mostly contains the work of **@pontusolsson03**, with a bit of help from **@BensinBosse** and some guidance from **@seetee**.

## Here´s basically how the API works

#### Routing - request and response

So basically, my API nowadays spits out HTML, fethced from an SQLite database just by using different URLs.
The database is set up so that each user/customer has their own table. In that table they have pages, which basically are what we call the rows. Each row has a page id, a page name, the actual content of the page as well as two separate columns for any NFC cards; primary and secondary. The pages originally come from a folder with HTML files, but in the future they will come from GitHub repositories containing markdown files which are converted to HTML by GitHub (somehow).

We have three _main_ directories, where the main things happen. Firstly we have the **controller**. In there we have two js-files; controller.js and router.js. Controller is basically the first file spinning the project up on start, deciding what happens when the API is called and who has access to it. Here is where the router is linked, and pointed to as the place to go next. In there we have three GET-routes, and they are _dynamic_! You see, we build our URIs on two different parameters. You could look at them like **localhost:8080/_parameter_1/parameter_2_**. The first one, parameter 1, is called _user_, and is used to decide which user is logged on, which means it is used to identify which table in the database to fetch data from. The second one, _card_, is used to determine what row on the database to fetch the content from, in other words what page from that user to load. The name "card" comes from the fact that the value of the parameter is basically the id of the NFC card being read in the frontend.

The **GET-routes are**, as you´ve probably understood by now, used for fetching data from the API and displaying it in the frontend part of this project. Another route is the **PUT-route**, used for modifying data in the database. This route doesn´t take any parameters, it is static at _/card_, and can be called from the frontend, where we have a UI for connecting NFC cards to pages. This is implemeneted to support the ability to chose which specific page to get by scanning a specific card.

#### Fetching data

The actual connection and function for fetching data from the database is imported from the second _main_ directory; **model**. Here we have two files; _fetch.js_ and _push.js_. Here´s where the connection to the database is established, and is where the functions for fetching as well as modifying data in the database based on the arguments passed is stored. These functions are exported, and imported in _router.js_. This way we don´t have too much code in the router itself, since that would make troubleshooting and reworking very hard and complicated.

#### Updating the contents of the database

The third _main_ directory is **views**, where we find the file _md_`_`_fetch.js_. This file is responsible for fetching the HTML files from the repo their respective repo and storing them in the database. This function is at the moment of writing under reconstruction, and some whole new exiting functionality is on it´s way.

#### Video- and site tips for understanding the basics of a REST API in Node using a database, for those of you who want to continue my work :)

Videos:

- https://youtu.be/-MTSQjw5DrM
- https://youtu.be/SccSCuHhOw0
- https://youtu.be/MbqSMgMAzxU
- https://youtu.be/e86IlsFWzEo
- https://youtu.be/2C1dqXXAii0
- https://youtu.be/fgTGADljAeg

Sites:

- https://www.sqlitetutorial.net/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference Statements/async_function

#### VSCode extensions I recommend for anyone working on this project (or just in general)

**Strongly recommended**

- Auto Close Tag
- Auto Complete Tag
- Auto Rename Tag
- Better Comments
- Bracket Pair Colorization Toggler
- EJS language support
- GitHub Pull Request and Issues
- HTML CSS Support
- PowerShell
- Prettier - Code Formatter
- SQLite

**More optional ones**

- Material Theme
- Live Server
- Community Material Theme
- CodeSnap
- Tabnine AI Autocomplete
- Turbo Console Log
- VSCode Great Icons

It should be noted that Node.js and Npm are required for working on this project:
https://nodejs.org/en/download/
