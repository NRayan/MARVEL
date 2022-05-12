import { CharacterProps } from "../../types";
import md5 from "md5";

export const serviceUtils = {
	mountInitialQuery(PUBLIC_KEY: string, PRIVATE_KEY: string): string {
		const timestamp = new Date().getTime();
		const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
		const query = `ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

		console.log(query);
		return query;
	},
	mountQuery(obj: object): string {
		let query = "";
		let first = true;
		Object.entries(obj).forEach(([key, val]) => {
			if (val!) {
				query += `${first ? "" : "&"}${key}=${val}`;
				first = false;
			}
		});

		return query;
	},
	mapCharacterDTO(item: any): CharacterProps {

		const character: CharacterProps =
		{
			id: item.id,
			name: item.name,
			description: item.description,
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