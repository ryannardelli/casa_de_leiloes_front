import {
    useReducer,
    type ReactNode,
    useCallback,
    useEffect,
} from "react";


import {
    initialStatePublicCollection,
    publicCollectionReducer,
} from "../../reducers/publicCollectionReducer";

import {
    publicCollectionService,
} from "../../services/publicCollection";
import { PublicCollectionContext } from "./PublicCollectionContext";

type PublicCollectionProviderProps = {
    children: ReactNode;
};

export const PublicCollectionProvider = ({
    children,
}: PublicCollectionProviderProps) => {
    const [
        statePublicCollection,
        dispatchPublicCollection,
    ] = useReducer(
        publicCollectionReducer,
        initialStatePublicCollection
    );

    const loadPublicCollection = useCallback(async () => {
    dispatchPublicCollection({
        type: "SET_LOADING_COLLECTION",
        payload: true,
    });

    dispatchPublicCollection({
        type: "SET_ERROR_COLLECTION",
        payload: "",
    });

    try {
        const results = await Promise.allSettled([
            publicCollectionService.getFeaturedWorks(),
            publicCollectionService.getJapaneseWorks(),
            publicCollectionService.getCuratedWorks(),
            publicCollectionService.getCategories(),
        ]);

        const [
            featuredResult,
            japaneseResult,
            curatedResult,
            categoriesResult,
        ] = results;

        if (featuredResult.status === "fulfilled") {
            dispatchPublicCollection({
                type: "SET_FEATURED_WORKS",
                payload: featuredResult.value,
            });
        }

        if (japaneseResult.status === "fulfilled") {
            dispatchPublicCollection({
                type: "SET_FEATURED_JAPANESE",
                payload: japaneseResult.value,
            });
        }

        if (curatedResult.status === "fulfilled") {
            dispatchPublicCollection({
                type: "SET_CURATED_WORKS",
                payload: curatedResult.value,
            });
        }

        if (categoriesResult.status === "fulfilled") {
            dispatchPublicCollection({
                type: "SET_CATEGORIES",
                payload: categoriesResult.value,
            });
        }

        if (results.some(result => result.status === "rejected")) {
            dispatchPublicCollection({
                type: "SET_ERROR_COLLECTION",
                payload: "Alguns dados da coleção não puderam ser carregados.",
            });
        }
    } catch (error) {
        console.error(error);
    } finally {
        dispatchPublicCollection({
            type: "SET_LOADING_COLLECTION",
            payload: false,
        });
    }
}, []);

    useEffect(() => {
        loadPublicCollection();
    }, [loadPublicCollection]);

    return (
        <PublicCollectionContext.Provider
            value={{
                statePublicCollection,
                dispatchPublicCollection,
                loadPublicCollection,
            }}
        >
            {children}
        </PublicCollectionContext.Provider>
    );
};
