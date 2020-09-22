module.exports = {
	response: (res, status, message='', data, statusCode) => {
		const result = {
			message: message || '',
			data: data || null,
			success: status || false,
			status: statusCode,
		};

		return res.status(result.status).json({
			success: result.success,
			message: message,
			data: data,
		});
	},
};
