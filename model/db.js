const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db/themes.db');

let sql = 'SELECT * FROM molekylverkstan;';

const readId = "air"

db.all(sql, [], (err, rows) => {
    if (err){
        throw err;
    }
    rows.forEach((row)=> {
        if (row.page_name == readId){
            console.log(row.page_content);
        }
    });
});

db.close();