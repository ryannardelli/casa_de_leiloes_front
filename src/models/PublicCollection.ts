export interface MuseumWork {
    id: number;
    title: string;
    artist: string;
    category: string;
    image: string;
    date: string;
    department: string;
}

export interface MuseumCategory {
    id: number;
    name: string;
}

export interface FeaturedWorks {
  externalItemId: number;
  title: string;
  artist: string;
  category: string;
  imageUrl: string;
  objectDate: string;
  department: string;
}

export interface PublicCollectionState {
    featuredWorks: FeaturedWorks[];
    featuredJapanese: MuseumWork[];
    curatedWorks: MuseumWork[];
    categories: MuseumCategory[];
    loadingCollection: boolean;
    errorCollection: string | null;
}

export type PublicCollectionAction =
    | {
          type: "SET_FEATURED_WORKS";
          payload: FeaturedWorks[];
      }
    | {
          type: "SET_FEATURED_JAPANESE";
          payload: MuseumWork[];
      }
    | {
          type: "SET_CURATED_WORKS";
          payload: MuseumWork[];
      }
    | {
          type: "SET_CATEGORIES";
          payload: MuseumCategory[];
      }
    | {
          type: "SET_LOADING_COLLECTION";
          payload: boolean;
      }
    | {
          type: "SET_ERROR_COLLECTION";
          payload: string;
      };