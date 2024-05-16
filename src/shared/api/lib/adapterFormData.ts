export const adapterFormData = <T extends object>(data: T) => {
	const formData = new FormData();

	for (const key in data) {
		const fieldValue = data[key];

		if (fieldValue) {
			formData.append(String(key), String(fieldValue));
		}
	}

	return formData;
};
