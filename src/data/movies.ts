export interface Movie {
  id: number;
  slug: string;
  title: string;
  originalTitle: string;
  year: number;
  director: string;
  cast: string[];
  genre: string[];
  ageRating: string;
  duration: string;
  country: string;
  description: string;
  trailerUrl?: string;
  img: string;
  imgBackdrop?: string;
  rating: number;
  tags: string[];
}

export const movies: Movie[] = [
  {
    id: 1,
    slug: "oppenheimer-2023",
    title: "Оппенгеймер",
    originalTitle: "Oppenheimer",
    year: 2023,
    director: "Кристофер Нолан",
    cast: ["Киллиан Мёрфи", "Эмили Блант", "Мэтт Дэймон", "Роберт Дауни мл.", "Флоренс Пью"],
    genre: ["Биография", "История", "Драма"],
    ageRating: "18+",
    duration: "3ч 00м",
    country: "США / Великобритания",
    description: "История Роберта Оппенгеймера — физика-теоретика, возглавившего Манхэттенский проект и создавшего первую в мире атомную бомбу. Фильм исследует внутренний конфликт человека, совершившего научный прорыв, который навсегда изменил мир — и его собственную судьбу. Нолан снял не боевик и не историческую хронику, а психологическую трагедию о цене знания и ответственности гения перед человечеством.",
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg",
    imgBackdrop: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/0e25810d-e02e-44a1-bb9b-83a7a0354af8.jpg",
    rating: 5,
    tags: ["Биография", "Исторический", "Драма"],
  },
];

export const getMovieBySlug = (slug: string) => movies.find((m) => m.slug === slug);
