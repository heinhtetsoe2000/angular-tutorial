var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "expensedb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message)
      throw err
   }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE expensess (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         item text, 
         amount real, 
         category text, 
         location text, 
         spendOn text, 
         createdOn text 
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  var insert = 'INSERT INTO expense (item, amount, category, location, spendOn, createdOn) VALUES (?,?,?,?,?,?)'

                  db.run(insert, ['Pizza', 10, 'Food', 'Pizza Hut', '2020-05-26 10:10', '2020-05-26 10:10'])
                  db.run(insert, ['Fish and Chips', 9, 'Food', 'Mcdonald', '2020-05-28 11:10', '2020-05-28 11:10'])
                  db.run(insert, ['Sandwich', 12, 'Food', 'Mcdonald', '2020-05-29 09:22', '2020-05-29 09:22'])
                  db.run(insert, ['Pita', 15, 'Food', 'KFC', '2020-06-06 16:18', '2020-06-06 16:18'])
                  db.run(insert, ['Hamburger', 8, 'Food', 'Burger King', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['Fried Chicken', 3, 'Food', 'Mcdonald', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['French Fries', 5, 'Food', 'Wendy\'s', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['Onion Rings', 2, 'Food', 'Dunkin\' Donuts', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['Chicken Nuggets', 6, 'Food', 'Mcdonald', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['Tacos', 4, 'Food', 'Taco Bell', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['Hot Dogs', 11, 'Food', 'Starbucks', '2020-06-01 18:14', '2020-05-01 18:14'])
                  db.run(insert, ['Ice Cream', 12, 'Food', 'Subway', '2020-06-01 18:14', '2020-05-01 18:14'])
               }
            }
      );  
   }
});

module.exports = db