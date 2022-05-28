const db = require("../config/mysql.js");
const newNotFoundError = require("../utilities/db/newNotFoundError.js");
const setErrorType = require("../utilities/db/setErrorType.js");

//This model contains all CRUD querys pertaining to students
//All querys are executed with the various methods
module.exports = function getQuery() {
	return Object.freeze({
		getAll,
		findById,
		insertOne,
		updateById,
		deleteById
	});
	function getAll(callback) {
		const query = "SELECT * FROM students WHERE status = 'active'";
		db.query(query, (err, result) => {
			const mysqlServiceError = setErrorType(err);
			callback(mysqlServiceError, result);
		});
	}

	function findById(id, callback) {
		let query = "SELECT * FROM students WHERE id = ?";
		db.query(query, id, (err, result) => {
			if (result && result.length == 0) {
				return callback(newNotFoundError(), []);
			}
			const mysqlServiceError = setErrorType(err);
			callback(mysqlServiceError, result);
		});
	}
	function insertOne(fields, callback) {
		const query = "INSERT INTO students SET ?";
		db.query(query, fields, (err, result) => {
			const mysqlServiceError = setErrorType(err);
			callback(mysqlServiceError, result);
		});
	}
	function updateById(id, fields, callback) {
		const query = "UPDATE students SET ? WHERE id= ?";
		db.query(query, [fields, id], (err, result) => {
			if (result && result.changedRows === 0) {
				return callback(newNotFoundError(), []);
			}
			const mysqlServiceError = setErrorType(err);
			callback(mysqlServiceError, result);
		});
	}
	function deleteById(id, callback) {
		const query = "UPDATE students SET status = 'deleted' WHERE id= ?";
		db.query(query, id, (err, result) => {
			if (result && result.changedRows === 0) {
				return callback(
					newNotFoundError("Error: Student id not found. No records deleted."),
					[]
				);
			}
			const mysqlServiceError = setErrorType(err);
			callback(mysqlServiceError, result);
		});
	}
};
