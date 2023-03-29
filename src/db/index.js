import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("diary.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL,  description TEXT NOT NULL, date TEXT NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertDiary = (name, image, description, date) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO events (name, image, description, date ) VALUES (?, ?, ?, ?);",
        [name, image, description, date],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const getDiary = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM events",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
