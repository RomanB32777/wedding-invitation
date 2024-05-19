import axios from "axios";

const createApiInstance = () => {
	if (!import.meta.env.VITE_SHEET_URL) {
		throw new Error("API link not set");
	}

	return axios.create({ baseURL: import.meta.env.VITE_SHEET_URL });
};

export const axiosService = createApiInstance();
