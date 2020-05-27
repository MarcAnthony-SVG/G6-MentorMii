var mysql = require("mysql");
var mysqlConfig = require("./dbConfig.js");
var connection = mysql.createConnection(mysqlConfig);

const getAllMentors = (cb) => {
    // let where = 'javascript = "${javascript}";'
  connection.query("SELECT * FROM Mentor;", (err, results) => {
    //selects all from the mentor table in the schema
    if (err) {
      console.log("Mentor GET query error"); 
      cb(err, null);
    } else {
      console.log("Mentor GET query good");
      cb(null, results);
    }
  });
};

const getAllMentiis = (cb) => {
  // let where = 'javascript = "${javascript}";'
connection.query("SELECT * FROM Mentii;", (err, results) => {
  //selects all from the mentor table in the schema
  if (err) {
    console.log("Mentii GET query error"); 
    cb(err, null);
  } else {
    console.log("Mentii GET query good");
    cb(null, results);
  }
});
};

const postMentors = (firstName, lastName, skill, review, picture, userName, password, email, bio, cb) => {
  connection.query(
    "INSERT INTO Mentor(firstName, lastName, skill, review, picture, userName, password, email, bio) VALUES (? , ?)",
    [firstName, lastName, skill, review, picture, userName, password, email, bio],
    (err, data) => {
      if (err) {
        console.log("post mentor query error");
        cb(err, null);
      } else {
        console.log("post mentor query good");
        cb(null, data);
      }
    }
  );
};

const postMentiis = (firstName, lastName, picture, userName, password, email, cb) => {
  connection.query(
    "INSERT INTO Mentii(firstName, lastName, picture, userName, password, email) VALUES (? , ?)",
    [firstName, lastName, picture, review, userName, password, email],
    (err, data) => {
      if (err) {
        console.log("post mentii query error");
        cb(err, null);
      } else {
        console.log("post mentii query good");
        cb(null, data);
      }
    }
  );
}

module.exports = {
  getAllMentors,
  getAllMentiis,
  postMentors,
  postMentiis,
};