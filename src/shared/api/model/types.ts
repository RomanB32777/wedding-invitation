interface IBaseResponse<T extends Record<string, unknown>> {
	values: T;
}

export type TFetchGuestResponse = IBaseResponse<{
	title: string;
	paragraph: string;
}>;

export type TSendReplyResponse = IBaseResponse<{
	status: "success" | "error";
	message: string;
}>;

export interface IFormReply {
	row: string | undefined | null;
	presence: string;
	drink: string;
}

export type TFormReplyFields = keyof IFormReply;
