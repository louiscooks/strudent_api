//handles the result.changedRows === 0 case;
//it returns the mysqlservice model for the controller layer
//to build and send the status code and error message;
module.exports = function newNotFoundError(message) {
	return {
		type: "NOT_FOUND",
		message: message || "Error: Student id is not found."
	};
};
