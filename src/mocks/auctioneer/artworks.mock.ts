export interface Artwork {
  id: string;
  title: string;
  artist: string;
  date: string;
  medium: string;
  imageUrl: string;
  department: string;
}

export const artworksMock: Artwork[] = [
  {
    id: "art-001",
    title: "Composição em tons clássicos",
    artist: "Artista não identificado",
    date: "Século XIX",
    medium: "Óleo sobre tela",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
    department: "Pintura",
  },
  {
    id: "art-002",
    title: "Estudo de escultura",
    artist: "Artista não identificado",
    date: "Século XX",
    medium: "Escultura",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
    department: "Escultura",
  },
  {
    id: "art-003",
    title: "Composição abstrata",
    artist: "Artista não identificado",
    date: "Século XX",
    medium: "Técnica mista",
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    department: "Arte moderna",
  },
];