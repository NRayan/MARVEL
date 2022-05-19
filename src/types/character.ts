type CharacterProps =
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

type CharacterQueryMounterProps =
    {
        nameStartsWith: string,
        offset: number,
        limit: number
    }

type CharactersGetProps =
    {
        characters: CharacterProps[],
        endOfList: boolean
    }

export { CharacterProps, CharacterQueryMounterProps, CharactersGetProps };