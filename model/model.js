import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "C:/Users/pontu/Documents/Skola/bord__backend/db/themes.db"
);

export function fetchContent(sqlQuery) {
  return new Promise((resolve, reject) => {
    db.all(sqlQuery, [], (err, rows) => {
      if (err) {
        resolve("404");
      } else {
        rows.forEach((row) => {
          console.log("Successfully fetched content");
          resolve(row.page_content);
        });
      }
    });
  });
}

// function getContent(sqlQuery, whenloaded) {
//   return new Promise((resolve) => {
//     resolve(
//       db.all(sqlQuery, [], (err, rows) => {
//         if (err) {
//           console.error(err);
//           console.log("Something went wrong in the db");
//         } else {
//           rows.forEach((row) => {
//             whenloaded(row.page_content);
//           });
//         }
//       })
//     );
//   });
// }

// export async function showContent(sqlQuery) {
//   await getContent(sqlQuery, (result) => {
//     console.log("Result:", result);
//   });
// }

// showContent(`SELECT page_content FROM fruit WHERE page_name = "apples"`);

// let finalContent;
// getPageContent(
//   `SELECT page_content FROM molekylverkstan WHERE page_name = "about"`,
//   (result) => console.log((finalContent = result))
// );
// console.log(finalContent);
// let content;
// const sqlQuery = `SELECT page_content FROM fruit WHERE page_name = "apples"`;
// db.all(sqlQuery, [], (err, rows) => {
//   if (err) {
//     throw err;
//   }
//   rows.forEach((row) => {
//     content = JSON.parse(row.page_content);
//     console.log(content);
//     return content;
//   });
// });

// console.log(content);
// let page = "about";
// db.get(sqlQuery, [page], (err, row) => {
//   if (err) {
//     console.log(sqlQuery);
//     console.error(err.message);
//     return console.log("Something went wrong in the db");
//   }
//   console.log(sqlQuery);
//   console.log(row);
//   return row
//     ? console.log("row.page_name", row.page_name, "row.page_id", row.page_id)
//     : console.log(`No page found with the name ${page}`);
// });

//db.close();

// getPageContent(`SELECT page_content FROM fruit WHERE page_name = "apples";`);
