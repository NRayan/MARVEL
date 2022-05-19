type ComicsProps = {
    title: string;
    thumbnail: string;
}

type ComicsQueryMounterProps =
    {
        offset: number,
        limit: number
    }

type ComicsGetProps =
    {
        comics: ComicsProps[],
        endOfList: boolean
    }

export { ComicsProps, ComicsQueryMounterProps, ComicsGetProps };