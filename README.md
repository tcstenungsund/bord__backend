# bord__backend

This is the backend part of Project Bord, which mostly contains the work of **@pontusolsson03**, with a bit of help and guidance from **@seetee**.


## Here´s basically how the API works

#### Routing and page rendering:
The API can both render whole **.ejs** pages, and send out JSON data, most often converted from **.md** files. To do this it uses routers, which in **server.js** are linked to the correct folders and pages, in **views/**. The routers themselves are located in **routes/**, and each folder with pages has it´s own router. The **air** router, **air.js** is basically for **localhost:8080/air** and every page within that folder, and **fruit.js** is for **localhost:8080/fruit** and every page within __that__ folder.

In the routers, in **routes/**, the **'/'** is used for the routers "home page" for that specific folder, and the **'/...'** are all refering to the folders other pages, like **'folder/page'**.
For example, in the air router, the **'/'** is basically **'localhost:8080/air'**, and **'/borealis'** is **'localhost:8080/air/borealis'**.
The same applies for the fruit router; the **'/'** is is **'localhost:8080/fruit'**, and **'/orange**' is **'localhost:8080/fruit/orange'**.

In the **index.js**, our home page for **localhost:8080/** is defined, and the page being rendered is **index.html**, which is located in **public/**.

#### Markdown and JSON 
For the use of markdown files, sent out to the browser in the form of JSON data, I´m using a bit of converting.
First, the markdown is fetched and stored in a variable. That variable is converted to HTML in a new variable, which is then converted to JSON. That JSON is sent out to the page, displayed either in JSON or Raw data.

For now that is all it is, but hopefully that JSON data is going to be used to render whole pages with the help of the **Project Bord** frontend team. Stick around to see more!