export interface Series {
  id: number;
  title: string;
  year: number;
  seasons: number;
  rating: number;
  img: string;
  tags: string[];
  platform: string;
  status: "Идёт" | "Завершён" | "Анонс";
  genre: string;
}

const S1 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/a625d1b4-2751-45b9-88d9-1bc8f1d5f206.jpg";
const S2 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/68874c06-8545-457e-8309-e82609dfc732.jpg";
const S3 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/5e2ad4da-2209-41a1-bae1-e726ec632218.jpg";
const S4 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/6bdd9d3b-1f7a-4b4f-8388-1e39b76b6a54.jpg";
const S5 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/a2331dde-9712-4cf8-bc83-fd993571ee7a.jpg";
const S6 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/5bddfc68-c987-4578-b695-d7c4bb6dfdad.jpg";

export const seriesGenres = [
  { name: "Все", slug: "all" },
  { name: "Криминал", slug: "criminal" },
  { name: "Фэнтези", slug: "fantasy" },
  { name: "Триллер", slug: "thriller" },
  { name: "Фантастика", slug: "scifi" },
  { name: "Комедия", slug: "comedy" },
  { name: "Исторический", slug: "history" },
  { name: "Драма", slug: "drama" },
  { name: "Ужасы", slug: "horror" },
];

export const seriesList: Series[] = [
  {
    id: 1,
    title: "Ночной патруль",
    year: 2024,
    seasons: 3,
    rating: 5,
    img: S1,
    tags: ["Криминал", "Нуар"],
    platform: "HBO",
    status: "Идёт",
    genre: "criminal",
  },
  {
    id: 2,
    title: "Владыки огня",
    year: 2023,
    seasons: 2,
    rating: 5,
    img: S2,
    tags: ["Фэнтези", "Эпик"],
    platform: "Netflix",
    status: "Идёт",
    genre: "fantasy",
  },
  {
    id: 3,
    title: "Зеркало разума",
    year: 2025,
    seasons: 1,
    rating: 5,
    img: S3,
    tags: ["Психология", "Триллер"],
    platform: "Apple TV+",
    status: "Завершён",
    genre: "thriller",
  },
  {
    id: 4,
    title: "Орбита 9",
    year: 2025,
    seasons: 2,
    rating: 4,
    img: S4,
    tags: ["Sci-Fi", "Космос"],
    platform: "Amazon",
    status: "Идёт",
    genre: "scifi",
  },
  {
    id: 5,
    title: "Хаос и порядок",
    year: 2024,
    seasons: 1,
    rating: 4,
    img: S5,
    tags: ["Комедия", "Драма"],
    platform: "Кинопоиск",
    status: "Завершён",
    genre: "comedy",
  },
  {
    id: 6,
    title: "Императрица",
    year: 2023,
    seasons: 2,
    rating: 5,
    img: S6,
    tags: ["История", "Костюмная"],
    platform: "Netflix",
    status: "Идёт",
    genre: "history",
  },
  {
    id: 7,
    title: "Тёмная сторона",
    year: 2026,
    seasons: 1,
    rating: 4,
    img: S3,
    tags: ["Криминал", "Детектив"],
    platform: "HBO",
    status: "Анонс",
    genre: "criminal",
  },
  {
    id: 8,
    title: "Последний рубеж",
    year: 2025,
    seasons: 3,
    rating: 5,
    img: S1,
    tags: ["Драма", "Военный"],
    platform: "Apple TV+",
    status: "Завершён",
    genre: "drama",
  },
  {
    id: 9,
    title: "Хроники бездны",
    year: 2024,
    seasons: 2,
    rating: 4,
    img: S2,
    tags: ["Фэнтези", "Мистика"],
    platform: "Amazon",
    status: "Идёт",
    genre: "fantasy",
  },
  {
    id: 10,
    title: "Сигнал",
    year: 2025,
    seasons: 1,
    rating: 5,
    img: S4,
    tags: ["Sci-Fi", "Триллер"],
    platform: "Netflix",
    status: "Завершён",
    genre: "scifi",
  },
  {
    id: 11,
    title: "Белый шум",
    year: 2026,
    seasons: 1,
    rating: 4,
    img: S5,
    tags: ["Ужасы", "Мистика"],
    platform: "HBO",
    status: "Анонс",
    genre: "horror",
  },
  {
    id: 12,
    title: "Век золота",
    year: 2023,
    seasons: 4,
    rating: 5,
    img: S6,
    tags: ["История", "Драма"],
    platform: "HBO",
    status: "Завершён",
    genre: "history",
  },
];
