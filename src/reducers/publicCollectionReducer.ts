import type {
    PublicCollectionAction,
    PublicCollectionState,
} from "../models/PublicCollection";

export const initialStatePublicCollection: PublicCollectionState = {
    featuredWorks: [],
    curatedWorks: [],
    categories: [],
    loadingCollection: false,
    errorCollection: null,
};

export function publicCollectionReducer(
    state: PublicCollectionState,
    action: PublicCollectionAction
): PublicCollectionState {
    switch (action.type) {
        case "SET_FEATURED_WORKS":
            return {
                ...state,
                featuredWorks: action.payload,
            };

        case "SET_CURATED_WORKS":
            return {
                ...state,
                curatedWorks: action.payload,
            };

        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
            };

        case "SET_LOADING_COLLECTION":
            return {
                ...state,
                loadingCollection: action.payload,
            };

            case "SET_ERROR_COLLECTION":
                return {
                    ...state,
                    errorCollection: action.payload || null,
                };

        // case "SET_ERROR_COLLECTION":
        //     return {
        //         ...state,
        //         errorCollection: action.payload,
        //         loadingCollection: false,
        //     };

        default:
            return state;
    }
}
