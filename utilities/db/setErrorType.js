//takes the mysql err
//builds and return the mysqlServiceError;
//controller layer parses and send the status code and error message;
module.exports = function setErrorType(err) {
	if (!err) {
		return null;
	}
	console.log("MYSQL LIB ERR:", err.code);
	let mysqlServiceError = {};
	switch (err.code) {
		case "ER_PARSE_ERROR":
			mysqlServiceError.type = "BAD_SYNTAX";
			mysqlServiceError.message = "Error: No column matches with field key.";
			break;
		case "ER_BAD_FIELD_ERROR":
			mysqlServiceError.type = "BAD_FIELD";
			mysqlServiceError.message = "Error: Field key contains invalid syntax.";
			break;
		case "ER_NO_SUCH_TABLE":
			mysqlServiceError.type = "NO_TABLE";
			mysqlServiceError.message = "Error: Table does not exist.";
			break;
		case "ER_DUP_ENTRY":
			mysqlServiceError.type = "DUP_ENTRY";
			mysqlServiceError.message = "Error: 'email' field key must be unique.";
			break;
		default:
			mysqlServiceError.type = "NOT_FOUND";
			mysqlServiceError.message = "Error: Student is not found.";
	}
	return mysqlServiceError;
};
