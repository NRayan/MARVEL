import md5 from "md5";
import { CharacterProps, CharacterQueryMounterProps } from "../../types";

export const serviceUtils = {
	mountInitialQuery(PUBLIC_KEY: string, PRIVATE_KEY: string): string {
		const timestamp = new Date().getTime();
		const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
		const query = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
		return query;
	},
	mountQuery(obj: CharacterQueryMounterProps): string {
		let query = "&";
		let first = true;
		Object.entries(obj).forEach(([key, val]) => {
			if (val) {
				query += `${first ? "" : "&"}${key}=${val}`;
				first = false;
			}
		});

		return query;
	},
	generateCallOffset(page: number, limit: number): number {
		return (page * limit);
	},
	mapCharacterDTO(item: any): CharacterProps {

		const character: CharacterProps =
		{
			id: item.id,
			name: item.name,
			description: item.description ? item.description : "No description",
			thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
			urls: {
				detail: item.urls[0]?.url,
				wiki: item.urls[1]?.url,
				comics: item.urls[2]?.url,
			}
		};

		return character;

	},
};