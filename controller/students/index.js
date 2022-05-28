const formatRequestData = require("../../utilities/students/formatRequestData.js");
const handleError = require("../../utilities/students/handleError.js");
const makeStudentsDb = require("../../query/buildStudentQuery.js");
const query = makeStudentsDb();

// Controller is responsible for parsing requests
// and building responses
module.exports.getAll = (req, res) => {
	query.getAll((err, result) => {
		if (err) {
			return handleError(err, res);
		}
		res.status(200).json({ status: "success", data: result });
	});
};

module.exports.handleGetStudentById = (req, res) => {
	const id = req.params.id;
	query.findById(id, (err, result) => {
		if (err) {
			return handleError(err, res);
		}
		res.status(200).json({ status: "success", data: result });
	});
};
module.exports.handleCreateStudent = (req, res) => {
	//payload
	const body = { ...req.body };
	const payload = formatRequestData(body);
	query.insertOne(payload, (err, result) => {
		if (err) {
			return handleError(err, res);
		}
		res.status(200).json({ status: "success", data: result });
	});
};
module.exports.handleUpdateStudentById = (req, res) => {
	const id = req.params.id;
	const body = { ...req.body };
	const payload = formatRequestData(body);
	query.updateById(id, payload, (err, result) => {
		if (err) {
			return handleError(err, res);
		}
		res.status(200).json({ status: "success", data: result });
	});
};
module.exports.handleDeleteStudentById = (req, res) => {
	const id = req.params.id;
	query.deleteById(id, (err, result) => {
		if (err) {
			return handleError(err, res);
		}
		res.status(200).json({ status: "success", data: result });
	});
};
