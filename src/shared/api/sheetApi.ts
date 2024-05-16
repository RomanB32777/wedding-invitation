import { axiosService } from "./axiosService";
import { adapterFormData } from "./lib/adapterFormData";
import { IFormReply, TFetchGuestResponse, TSendReplyResponse } from "./model/types";

export const fetchGuests = async (guestsNum: number) => {
	const { data } = await axiosService.get<TFetchGuestResponse>("", {
		params: { row: guestsNum },
	});

	return data.values;
};

export const sendReply = async (formData: IFormReply) => {
	const { data } = await axiosService.post<TSendReplyResponse>("sdg", adapterFormData(formData));

	return data.values;
};
