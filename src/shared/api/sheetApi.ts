import { toast } from "react-toastify";

import { axiosService } from "./apiInstance";
import { adapterFormData } from "./lib/adapterFormData";
import { errorHandler } from "./lib/errorHandler";
import { IFormReply, TFetchGuestResponse, TSendReplyResponse } from "./model/types";

export const fetchGuests = async (guestsNum: IFormReply["row"]) => {
	try {
		const { data } = await axiosService.get<TFetchGuestResponse>("", {
			params: { row: guestsNum },
		});

		return data.values;
	} catch (error) {
		errorHandler(error);
	}
};

export const sendReply = async (formData: IFormReply) => {
	try {
		const { data } = await axiosService.post<TSendReplyResponse>("", adapterFormData(formData));

		toast.success("Ваш ответ успешно отправлен!");

		return data.values;
	} catch (error) {
		errorHandler(error);
	}
};
