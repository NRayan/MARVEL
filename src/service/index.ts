
// import { store } from "../store";
import md5 from "md5";
import { requester } from "./service";

const PUBLICK_KEY = "4d57c17c999b5075bcb0e5aae4ae5bba";
const PRIVATE_KEY = "dbc1c20db1894533cab5e0732a86863f2052394c";

export const requests =
{
	async getCharacters() {
		try {

			const initialQuery = mountInitialQuery();
			const { data } = await requester.get("/characters?" + initialQuery);
			return data;
		} catch (error: any) {
			handleError(error);
		}
	}
};

function handleError(error: any) {
	const caughtError = error?.response?.data?.errors?.message;
	if (!caughtError)
		throw error;
	else
		throw new Error(caughtError);
}

function mountInitialQuery(): string {
	const timestamp = new Date().getTime();
	const hash = md5(timestamp + PRIVATE_KEY + PUBLICK_KEY);
	const query = `ts=${timestamp}&apikey=${PUBLICK_KEY}&hash=${hash}`;
	return query;
}

function mountQuery(obj: object): string {
	let query = "";
	let first = true;
	Object.entries(obj).forEach(([key, val]) => {
		if (val!) {
			query += `${first ? "" : "&"}${key}=${val}`;
			first = false;
		}
	});

	return query;

}