import { toast } from "react-toastify";

import { TApiError } from "../model/types";

export const errorHandler = (error: unknown) =>
	toast.error(`Произошла ошибка! - ${(error as TApiError).message}`);
