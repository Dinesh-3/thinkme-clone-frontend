const isValidForm = (error) => {
	const values = Object.values(error);
	for (const value of values) if (value !== false) return false;

	return true;
};

export { isValidForm }