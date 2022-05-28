const express = require("express");
const router = express.Router();
const controller = require("../../controller/students/index.js");

router.route("/").get(controller.getAll).post(controller.handleCreateStudent);
router
	.route("/:id")
	.get(controller.handleGetStudentById)
	.patch(controller.handleUpdateStudentById)
	.delete(controller.handleDeleteStudentById);

module.exports = router;
