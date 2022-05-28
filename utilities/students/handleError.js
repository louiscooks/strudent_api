//handles sending the error response
module.exports = function handleError(err, res) {
	// err is a custom mysql service error
	console.log(err);
	let code = 200;
	if (err.type) {
		switch (err.type) {
			case "BAD_SYNTAX":
				code = 500;
			case "BAD_FIELD":
				code = 400;
			case "ER_NO_SUCH_TABLE":
				code = 500;
			case "DUP_ENTRY":
				code = 400;
			case "NOT_FOUND":
				code = 404;
		}
	}
	res.status(code).json({ status: "error", message: err.message });
};
