import { format } from "date-fns";

//Helper functio just to round the numbers we get from the request to the backend
export const round = (value: number, precision: number) => {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
};

//Helper function to format the dates:
export const formatLocalDate = (date: string, pattern: string) => {
	const dt = new Date(date);
	const dtDateOnly = new Date(
		dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
	);
	return format(dtDateOnly, pattern);
};
