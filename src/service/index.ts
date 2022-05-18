import { CharactersGetProps } from "../types";
import { serviceUtils } from "../utils";
import { requester } from "./service";

const PUBLIC_KEY = "4d57c17c999b5075bcb0e5aae4ae5bba";
const PRIVATE_KEY = "dbc1c20db1894533cab5e0732a86863f2052394c";

const charactersGetLimit = 10;

export const requests =
{
	async getCharacters(page: number, searchText: string): Promise<CharactersGetProps> {
		try {

			const initialQuery = serviceUtils.mountInitialQuery(PUBLIC_KEY, PRIVATE_KEY);
			const otherQueries = serviceUtils.mountQuery({ limit: charactersGetLimit, offset: serviceUtils.generateCallOffset(page, charactersGetLimit), nameStartsWith: searchText });

			const { data } = await requester.get("/characters?" + initialQuery + otherQueries);
			const characters = data.data.results.map(serviceUtils.mapCharacterDTO);

			return { characters: characters, endOfList: data.data.limit !== data.data.count };

		} catch (error: any) {
			handleError(error);
			return { characters: [], endOfList: true };
		}
	}
};

function handleError(error: any) {
	const caughtError = error?.response?.data?.message;
	if (!caughtError)
		throw error;
	else
		throw new Error(caughtError);
}

