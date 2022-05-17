import { RoutesProps } from "../types"

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends RoutesProps { }
    }
}