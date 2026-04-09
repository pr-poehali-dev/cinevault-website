export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  rating: number;
  img: string;
  tags: string[];
  duration: string;
}

export interface Genre {
  name: string;
  slug: string;
  icon: string;
  count: number;
  description: string;
  movies: Movie[];
}

const P1 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/9a1508cf-aaf2-4432-a46e-99f5b1bee219.jpg";
const P2 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/0ba446cf-7be5-4e99-9c13-50d3a8aa5287.jpg";
const P3 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/fe3ab7a6-c2e7-4a88-bf39-3f4c2eb17f90.jpg";
const P4 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/ee289538-68dd-470f-8d6e-ac7a98007c74.jpg";
const P5 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg";
const P6 = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/029ce885-c123-44ac-9d52-a9b185f01d4a.jpg";

const defaultMovies: Movie[] = [
  { id: 1, title: "Исчезновение", year: 2024, director: "А. Финчер", rating: 5, img: P1, tags: ["Психологический", "Триллер"], duration: "2ч 18м" },
  { id: 2, title: "Горизонт", year: 2025, director: "К. Нолан", rating: 5, img: P2, tags: ["Эпик", "Приключения"], duration: "2ч 45м" },
  { id: 3, title: "Тёмный лес", year: 2024, director: "А. Астер", rating: 4, img: P3, tags: ["Атмосферный"], duration: "1ч 52м" },
  { id: 4, title: "Тени прошлого", year: 2023, director: "П. Верхувен", rating: 4, img: P4, tags: ["Напряжённый"], duration: "2ч 05м" },
  { id: 5, title: "Последняя волна", year: 2025, director: "Д. Вильнёв", rating: 5, img: P5, tags: ["Визуальный"], duration: "2ч 31м" },
  { id: 6, title: "Чужой берег", year: 2024, director: "С. Мендес", rating: 4, img: P6, tags: ["Авторское"], duration: "1ч 58м" },
  { id: 7, title: "Контроль", year: 2026, director: "Й. Кассаветис", rating: 4, img: P1, tags: ["Психологический"], duration: "2ч 12м" },
  { id: 8, title: "Красный туман", year: 2025, director: "Г. дель Торо", rating: 5, img: P3, tags: ["Атмосферный"], duration: "2ч 08м" },
];

export const genres: Genre[] = [
  {
    name: "Триллеры",
    slug: "trillery",
    icon: "🔪",
    count: 87,
    description: "Напряжённые истории на грани нервного срыва. Лучшие триллеры, которые не дают оторваться от экрана.",
    movies: defaultMovies,
  },
  {
    name: "Драмы",
    slug: "dramy",
    icon: "🎭",
    count: 134,
    description: "Глубокие человеческие истории о любви, потере и поиске себя. Кино, которое меняет взгляд на жизнь.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Драма", "Эмоциональный"] })),
  },
  {
    name: "Ужасы",
    slug: "uzhasy",
    icon: "👻",
    count: 62,
    description: "От классического слэшера до изощрённого психологического хоррора. Лучшие фильмы ужасов всех времён.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Хоррор", "Страх"] })),
  },
  {
    name: "Фантастика",
    slug: "fantastika",
    icon: "🚀",
    count: 95,
    description: "Космические эпопеи, антиутопии, путешествия во времени. Sci-Fi, расширяющий границы воображения.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Sci-Fi", "Будущее"] })),
  },
  {
    name: "Комедии",
    slug: "komedii",
    icon: "😄",
    count: 73,
    description: "Умные, абсурдные, романтические. Комедии, которые заставляют смеяться по-настоящему.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Комедия", "Лёгкий"] })),
  },
  {
    name: "Боевики",
    slug: "boeviki",
    icon: "💥",
    count: 110,
    description: "Адреналин, экшен и зрелищные постановки. Лучшие боевики для вечера с эффектами.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Экшен", "Боевик"] })),
  },
  {
    name: "Детективы",
    slug: "detektivy",
    icon: "🔍",
    count: 49,
    description: "Загадки, улики и неожиданные развязки. Детективы, которые держат в напряжении до титров.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Детектив", "Расследование"] })),
  },
  {
    name: "Анимация",
    slug: "animaciya",
    icon: "✨",
    count: 58,
    description: "Не только для детей. Анимационные шедевры Pixar, Studio Ghibli и независимых авторов.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Анимация", "Для всех"] })),
  },
  {
    name: "Криминал",
    slug: "kriminal",
    icon: "🎩",
    count: 44,
    description: "Мир организованной преступности, гангстеры и дерзкие ограбления. Лучшее криминальное кино.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Криминал", "Гангстеры"] })),
  },
  {
    name: "Военный",
    slug: "voennyj",
    icon: "🎖️",
    count: 37,
    description: "Истории мужества, стойкости и человечности в условиях войны. Кино, которое важно видеть.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Война", "История"] })),
  },
  {
    name: "Фэнтези",
    slug: "fentezi",
    icon: "🐉",
    count: 52,
    description: "Волшебные миры, эпические квесты и магические существа. Лучшее фэнтези большого экрана.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Фэнтези", "Магия"] })),
  },
  {
    name: "Документальный",
    slug: "dokumentalnyj",
    icon: "🎥",
    count: 41,
    description: "Реальные истории, которые потрясают сильнее любой выдумки. Лучшие документальные фильмы.",
    movies: defaultMovies.map(m => ({ ...m, tags: ["Документальный", "Реальный"] })),
  },
];

export const getGenreBySlug = (slug: string): Genre | undefined =>
  genres.find(g => g.slug === slug);
