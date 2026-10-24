import { createContext } from "react";

import {
    initialStatePublicCollection,
} from "../../reducers/publicCollectionReducer";

import type {
    PublicCollectionAction,
    PublicCollectionState,
} from "../../models/PublicCollection";

type PublicCollectionContextType = {
    statePublicCollection: PublicCollectionState;

    dispatchPublicCollection: (
        action: PublicCollectionAction
    ) => void;

    loadPublicCollection: () => Promise<void>;
};

export const PublicCollectionContext =
    createContext<PublicCollectionContextType>({
        statePublicCollection: initialStatePublicCollection,

        dispatchPublicCollection: () => undefined,

        loadPublicCollection: async () => {
            throw new Error(
                "loadPublicCollection not implemented"
            );
        },
    });
