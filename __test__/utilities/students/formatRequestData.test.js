const formatRequestData = require("../../../utilities/students/formatRequestData.js");

test("takes an object and returns a mysql payload", () => {
	expect(
		formatRequestData({ firstName: "John", lastName: "Doe" })
	).toStrictEqual({
		firstName: "John",
		lastName: "Doe"
	});
});
