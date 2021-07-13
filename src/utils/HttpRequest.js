import axios from './AxiosConfig';

const HttpRequest = async ({ path, body, query, headers, method }) => {
	try {
		const response = await axios.request({
			method: method,
			url: `${path}${query ? '?' + query : ''}`,
			data: body,
			headers: headers,
		});
		const responseData = response['data'];
		return responseData;
	} catch (error) {
		return (
			error?.response?.data ?? {
				status: false,
				message: error['message'] || 'Internal Server Error, Please try again',
				status_code: error['status_code'] || 500,
			}
		);
	}
};

export { HttpRequest };
