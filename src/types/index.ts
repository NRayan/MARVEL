import { CompositeNavigationProp } from "@react-navigation/native";

export type CharacterProps =
    {
        id: number,
        name: string,
        description: string,
        thumbnail: string,
        urls: {
            detail: string,
            wiki: string,
            comics: string
        }
    }

export type CharacterQueryMounterProps =
    {
        nameStartsWith: string,
        offset: number,
        limit: number
    }

export type CharactersGetProps =
    {
        characters: CharacterProps[],
        endOfList: boolean
    }