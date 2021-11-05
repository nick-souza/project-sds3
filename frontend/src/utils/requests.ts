export const BASE_URL =
	process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";
//Using the null coalescing operator to use the localhost in case the first variable is not defined
