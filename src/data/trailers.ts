export interface Trailer {
  id: number;
  title: string;
  year: number;
  genre: string;
  duration: string;
  img: string;
  description: string;
  studio: string;
  releaseDate: string;
}

export const trailers: Trailer[] = [
  {
    id: 1,
    title: "Громовержец",
    year: 2026,
    genre: "Боевик",
    duration: "2:34",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/439ce577-8d46-4d3a-91af-9e03b105c9da.jpg",
    description: "Эпический боевик о герое, вступающем в схватку с силами, превосходящими человеческое понимание. Грандиозные спецэффекты и захватывающий экшен.",
    studio: "Marvel Studios",
    releaseDate: "Лето 2026",
  },
  {
    id: 2,
    title: "Неон-Сити",
    year: 2026,
    genre: "Фантастика",
    duration: "3:01",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/6bc636ab-4436-4e2b-b77d-093c67d5130a.jpg",
    description: "Киберпанк-антиутопия о детективе, расследующем серию убийств в мегаполисе будущего, где грань между человеком и машиной стёрта.",
    studio: "A24",
    releaseDate: "Осень 2026",
  },
  {
    id: 3,
    title: "Тёмный порог",
    year: 2026,
    genre: "Ужасы",
    duration: "1:58",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/bd369821-4798-4b02-8f22-9765dd76cd80.jpg",
    description: "Психологический хоррор об изолированной семье, обнаруживающей, что их новый дом хранит тайны, которые лучше было бы не трогать.",
    studio: "Blumhouse",
    releaseDate: "Октябрь 2026",
  },
  {
    id: 4,
    title: "Последний закат",
    year: 2026,
    genre: "Драма",
    duration: "2:17",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/125bd6bd-ced9-4877-a4e3-4144dd6af374.jpg",
    description: "Камерная история о двух незнакомцах, случайно встретившихся на краю света. Фильм о выборе, прощении и том, что остаётся после нас.",
    studio: "NEON",
    releaseDate: "Зима 2026",
  },
  {
    id: 5,
    title: "Горизонт событий",
    year: 2026,
    genre: "Триллер",
    duration: "2:45",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/0e25810d-e02e-44a1-bb9b-83a7a0354af8.jpg",
    description: "Научно-фантастический триллер о команде астронавтов, обнаруживших на краю Солнечной системы нечто, способное изменить судьбу человечества.",
    studio: "Warner Bros.",
    releaseDate: "Весна 2026",
  },
  {
    id: 6,
    title: "Старый свет",
    year: 2026,
    genre: "Детектив",
    duration: "2:12",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/ee289538-68dd-470f-8d6e-ac7a98007c74.jpg",
    description: "Нуар-детектив в антураже послевоенного Парижа. Бывший офицер расследует дело, в котором каждый свидетель лжёт, а правда хуже любой лжи.",
    studio: "StudioCanal",
    releaseDate: "Лето 2026",
  },
  {
    id: 7,
    title: "Пустота",
    year: 2026,
    genre: "Фантастика",
    duration: "2:28",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/029ce885-c123-44ac-9d52-a9b185f01d4a.jpg",
    description: "Визуально оглушительная фантастика Дени Вильнёва о первом контакте с цивилизацией, существующей вне времени и пространства.",
    studio: "Paramount",
    releaseDate: "Осень 2026",
  },
  {
    id: 8,
    title: "Долгая ночь",
    year: 2026,
    genre: "Драма",
    duration: "1:55",
    img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg",
    description: "Камерная драма о трёх друзьях, собравшихся на одну ночь спустя десять лет молчания. Слова, которые давно нужно было сказать.",
    studio: "MUBI",
    releaseDate: "Зима 2026",
  },
];

export const genres = ["Все", "Боевик", "Фантастика", "Ужасы", "Драма", "Триллер", "Детектив"];
