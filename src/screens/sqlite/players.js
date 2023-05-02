import db from "./sqliteBase";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS players ( name TEXT, position REAL, rating TEXT);");
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      
      tx.executeSql(
        "INSERT INTO players ( name, position, rating) VALUES (?, ?, ?);",
        [obj.name, obj.position, obj.rating],
        //-----------------------
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Erro ao inserir objeto: " + JSON.stringify(obj)); // inserção falhou
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const all = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "SELECT * FROM players;",
          [],
          //-----------------------
          (_, { rows }) => resolve(rows._array),
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };


export default {
  create,
  //update,
  //find,
  all,
  //remove,
};