//dynamically creates the payload depending on the data from the req.body
module.exports = function formatRequestData(data) {
	const arr = Object.entries(data);
	let payload = {};
	arr.forEach(([key, value]) => {
		payload[key] = value;
	});
	return payload;
};
