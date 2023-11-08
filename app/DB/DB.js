import * as SQLite from 'expo-sqlite';
// import {  } from 'expo-file-system';

const db = SQLite.openDatabase('pecas.db');

export default db;


// open the database
// let db = new sqlite3.Database('../../data/Pecas.sb', sqlite3.OPEN_READWRITE, (err: any) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the database.');
// });


// let getData = db.serialize(() => {
//     db.each(`SELECT * from Pecas`, (err: any, row: any) =>{
//         if(err) {console.log(err.message)};

//         return row;
//     });

//     db.close((err: any) =>{
//         if(err) {console.log(err.message)}

//         console.log("DataBase Closed");
//     })
// });

// export {db, getData};

// export class DataBase{
//     DB(){
        
//     }

//     public getJobs(): Promise<any>{
//         console.log(getData);
//         return Promise.resolve(getData);
//     }

//     // public selectDB() {
//     //     db.serialize(() => {
//     //         db.each(`SELECT * from Pecas`, (err: any, row: any) => {
//     //             if (err) {
//     //                 console.error(err.message);
//     //             }
//     //             return row;
//     //         });
//     //     });


//     //     db.close((err: any) => {
//     //         if (err) {
//     //             console.error(err.message);
//     //         }
//     //         console.log('Close the database connection.');
//     //     });

//     // }
// }