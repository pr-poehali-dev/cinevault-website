const HERO_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/0e25810d-e02e-44a1-bb9b-83a7a0354af8.jpg";
const WEEK_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg";
const NOIR_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/ee289538-68dd-470f-8d6e-ac7a98007c74.jpg";
const SCI_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/029ce885-c123-44ac-9d52-a9b185f01d4a.jpg";

export interface CollectionMovie {
  id: number;
  slug?: string;
  title: string;
  year: number;
  director: string;
  rating: number;
  img: string;
  tags: string[];
  duration: string;
  genre?: string;
  cast?: string;
  description?: string;
}

export interface Collection {
  id: number;
  slug: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  count: number;
  isWeekly?: boolean;
  movies: CollectionMovie[];
}

const defaultMovies: CollectionMovie[] = [
  { id: 1, slug: "oppenheimer-2023", title: "Оппенгеймер", year: 2023, director: "Кристофер Нолан", rating: 5, img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg", tags: ["Биография", "Драма"], duration: "3ч 00м", genre: "Драма", cast: "Киллиан Мёрфи, Роберт Дауни мл.", description: "Создатель атомной бомбы — между триумфом науки и ужасом последствий." },
  { id: 11, title: "Исчезновение", year: 2024, director: "Дэвид Финчер", rating: 5, img: HERO_IMG, tags: ["Триллер", "Детектив"], duration: "2ч 18м", genre: "Триллер", cast: "Кейт Бланшетт, Оскар Айзек", description: "Детектив расследует исчезновение молодой женщины в маленьком городке. Каждый подозреваемый скрывает правду, но только один — убийственную." },
  { id: 2, title: "Горизонт", year: 2025, director: "Кристофер Нолан", rating: 5, img: SCI_IMG, tags: ["Фантастика", "Эпик"], duration: "2ч 45м", genre: "Фантастика", cast: "Киллиан Мёрфи, Зендая", description: "Экипаж межзвёздной экспедиции обнаруживает на краю галактики сигнал, который меняет всё, что человечество знало о своём происхождении." },
  { id: 3, title: "Тёмный лес", year: 2024, director: "Ари Астер", rating: 4, img: NOIR_IMG, tags: ["Ужасы", "Драма"], duration: "1ч 58м", genre: "Хоррор", cast: "Флоренс Пью, Джек Рейнор", description: "Семья переезжает в загородный дом, окружённый лесом. С каждой ночью тишина снаружи становится всё более угрожающей." },
  { id: 4, title: "Последний рейс", year: 2023, director: "П.Т. Андерсон", rating: 5, img: WEEK_IMG, tags: ["Драма"], duration: "2ч 30м", genre: "Драма", cast: "Хоакин Феникс, Риз Уизерспун", description: "Пилот на пенсии соглашается на один последний рейс через Атлантику. За эти восемь часов перевернётся его жизнь." },
  { id: 5, title: "Пустота", year: 2025, director: "Дени Вильнёв", rating: 4, img: HERO_IMG, tags: ["Sci-Fi", "Триллер"], duration: "2ч 12м", genre: "Фантастика", cast: "Тимоти Шаламе, Кейт Бланшетт", description: "Астронавт возвращается с задания в одиночестве. Он не помнит, что произошло на станции, но тело помнит всё." },
  { id: 6, title: "Долгая ночь", year: 2022, director: "Михаэль Ханеке", rating: 5, img: NOIR_IMG, tags: ["Арт-хаус", "Драма"], duration: "1ч 47м", genre: "Драма", cast: "Изабель Юппер, Даниэль Отой", description: "Двое незнакомцев оказываются заперты в одном доме во время бурана. За одну ночь они скажут друг другу то, что боялись сказать всю жизнь." },
  { id: 7, title: "Нить", year: 2023, director: "Дэвид Финчер", rating: 4, img: SCI_IMG, tags: ["Детектив", "Триллер"], duration: "2ч 05м", genre: "Детектив", cast: "Майкл Фассбендер, Руни Мара", description: "Частный детектив берётся за дело о краже, которое оказывается верхушкой айсберга. Следуя за нитью, он приходит туда, куда лучше было не возвращаться." },
  { id: 8, title: "Холодный свет", year: 2024, director: "Гильермо дель Торо", rating: 4, img: WEEK_IMG, tags: ["Фэнтези", "Ужасы"], duration: "1ч 52м", genre: "Фэнтези", cast: "Ана де Армас, Дуглас Бут", description: "В городе, где солнце не заходит летом, начинают пропадать люди. Молодая художница находит связь между исчезновениями и своими ночными рисунками." },
];

export const collections: Collection[] = [
  {
    id: 1,
    slug: "velikie-eposy",
    title: "Великие эпосы большого экрана",
    desc: "15 монументальных фильмов, которые переосмыслили жанр. От «Лоуренса Аравийского» до «Дюны» — эпическое кино, которое смотрят на большом экране.",
    img: WEEK_IMG,
    tags: ["Эпик", "Фантастика", "Экшен"],
    count: 15,
    isWeekly: true,
    movies: defaultMovies,
  },
  {
    id: 2,
    slug: "nuar-i-detektiv",
    title: "Нуар и детектив",
    desc: "Тёмные улицы, роковые красавицы, частные сыщики — лучший нуар всех времён. Фильмы, в которых атмосфера важнее сюжета.",
    img: NOIR_IMG,
    tags: ["Нуар", "Детектив", "Криминал"],
    count: 24,
    movies: defaultMovies,
  },
  {
    id: 3,
    slug: "fantastika-kosmos",
    title: "Фантастика / Космос",
    desc: "Эпические путешествия сквозь звёзды, инопланетные цивилизации и будущее человечества. Лучшая science fiction на экране.",
    img: SCI_IMG,
    tags: ["Sci-Fi", "Фантастика", "Эпик"],
    count: 31,
    movies: defaultMovies,
  },
  {
    id: 4,
    slug: "avtorskoe-kino",
    title: "Авторское кино",
    desc: "Висконти, Тарковский, Феллини — великие режиссёры, изменившие язык кино. Фильмы, которые остаются с тобой навсегда.",
    img: HERO_IMG,
    tags: ["Арт-хаус", "Авторское", "Классика"],
    count: 18,
    movies: defaultMovies,
  },
  {
    id: 5,
    slug: "korejskie-thrillery",
    title: "Корейские триллеры",
    desc: "От «Олдбоя» до «Паразитов» — корейцы давно переиграли Голливуд в жанре триллера. Здесь нет понятия «слишком жёстко».",
    img: NOIR_IMG,
    tags: ["Корея", "Триллер", "Детектив"],
    count: 19,
    movies: defaultMovies,
  },
  {
    id: 6,
    slug: "psihologicheskie-dramy",
    title: "Психологические драмы",
    desc: "Кино, которое копается в голове. После этих фильмов сидишь минут десять и пытаешься собрать мысли обратно.",
    img: WEEK_IMG,
    tags: ["Психология", "Драма", "Арт-хаус"],
    count: 22,
    movies: defaultMovies,
  },
  {
    id: 7,
    slug: "neozhidannye-kontsovki",
    title: "Фильмы с неожиданной концовкой",
    desc: "Два часа уверен, что всё понял. Потом финальные десять минут — и хочется переосмыслить всё. Только без спойлеров.",
    img: SCI_IMG,
    tags: ["Твист", "Триллер", "Детектив"],
    count: 27,
    movies: defaultMovies,
  },
  {
    id: 8,
    slug: "klassika-90h",
    title: "Классика 90-х и нулевых",
    desc: "Хорошее кино не протухает. Фильмы девяностых и нулевых — они заткнут за пояс любую современную премьеру.",
    img: HERO_IMG,
    tags: ["Классика", "90-е", "2000-е"],
    count: 35,
    movies: defaultMovies,
  },
];

export const getCollectionBySlug = (slug: string): Collection | undefined =>
  collections.find((c) => c.slug === slug);

export const weeklyCollection = collections.find((c) => c.isWeekly) ?? collections[0];