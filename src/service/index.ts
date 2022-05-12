import { CharacterProps } from "../types";
import { serviceUtils } from "../utils";
import { requester } from "./service";

const PUBLIC_KEY = "4d57c17c999b5075bcb0e5aae4ae5bba";
const PRIVATE_KEY = "dbc1c20db1894533cab5e0732a86863f2052394c";

export const requests =
{
	async getCharacters(): Promise<CharacterProps[]> {
		try {

			const initialQuery = serviceUtils.mountInitialQuery(PUBLIC_KEY, PRIVATE_KEY);

			const { data } = await requester.get("/characters?" + initialQuery);
			const characters = data.data.results.map(serviceUtils.mapCharacterDTO);
			return characters;

		} catch (error: any) {
			handleError(error);
			return [];
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

