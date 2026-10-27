import type {
    MuseumWork,
    MuseumCategory,
    FeaturedWorks,
} from "../models/PublicCollection";

const API_URL = "/public/collections";

type ApiError = {
    message?: string;
};

export const publicCollectionService = {
    getJapaneseWorks: async (): Promise<MuseumWork[]> => {
        const res = await fetch(`${API_URL}/japanese`);

        if (!res.ok) {
            const errorData: ApiError = await res
                .json()
                .catch(() => ({}));

            throw new Error(
                errorData.message || "Erro ao carregar obras em destaque"
            );
        }

        return res.json() as Promise<MuseumWork[]>;
    },

    getFeaturedWorks: async (): Promise<FeaturedWorks[]> => {
    const res = await fetch(`${API_URL}/featured`);

    if (!res.ok) {
        const errorData: ApiError = await res
            .json()
            .catch(() => ({}));

        throw new Error(
            errorData.message || "Erro ao carregar obras em destaque"
        );
    }

    return res.json() as Promise<FeaturedWorks[]>;
    },

    getCuratedWorks: async (): Promise<MuseumWork[]> => {
        const res = await fetch(`${API_URL}/curated`);

        if (!res.ok) {
            const errorData: ApiError = await res
                .json()
                .catch(() => ({}));

            throw new Error(
                errorData.message || "Erro ao carregar obras da curadoria"
            );
        }

        return res.json() as Promise<MuseumWork[]>;
    },

    getCategories: async (): Promise<MuseumCategory[]> => {
        const res = await fetch(`${API_URL}/categories`);

        if (!res.ok) {
            const errorData: ApiError = await res
                .json()
                .catch(() => ({}));

            throw new Error(
                errorData.message || "Erro ao carregar departamentos"
            );
        }

        return res.json() as Promise<MuseumCategory[]>;
    },

    searchExternalItems: async (query: string) => {
        const res = await fetch(
            `${API_URL}/search?q=${encodeURIComponent(query)}`
        );

        if (!res.ok) {
            const errorData: ApiError = await res
                .json()
                .catch(() => ({}));

            throw new Error(
                errorData.message || "Erro ao pesquisar obras externas"
            );
        }

        return res.json();
    },
};
