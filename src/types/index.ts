export type CharacterProps =
    {
        id: number,
        name: string,
        description:string,
        thumbnail: string,
        urls: {
            detail: string,
            wiki: string,
            comics: string
        }
    }