export const products = [
  {
    id: 1,
    name: "Плюшевый женский костюм оверсайз",
    price: 10261,
    originalPrice: 12061, // Добавляем оригинальную цену для скидки
    category: "повседневный",
    image: "https://via.placeholder.com/300x400/FFE4E1/FF6B8B?text=Плюшевый+оверсайз",
    sizes: ["S-42", "M-46"],
    colors: ["бежевый", "красный", "серый", "голубой", "черный", "коричневый", "молочный"],
    description: "Уютный плюшевый костюм оверсайз для максимального комфорта",
    discount: 15 // Процент скидки
  },
  {
    id: 2,
    name: "Костюм летний с шортами",
    price: 3668,
    originalPrice: 4668,
    category: "летний",
    image: "https://via.placeholder.com/300x400/FFF0F5/FF6B8B?text=Летний+с+шортами",
    sizes: ["S-42", "M-46"],
    colors: ["красный", "бежевый", "розовый", "голубой", "коричневый", "черный", "серый"],
    description: "Легкий летний костюм с удобными шортами",
    discount: 21
  },
  {
    id: 3,
    name: "Костюм женский трикотажный весенний",
    price: 5785,
    category: "весенний",
    image: "https://via.placeholder.com/300x400/FFD1DC/FF6B8B?text=Трикотажный+весенний",
    sizes: ["S-42", "M-46"],
    colors: ["красный", "белый", "коричневый"],
    description: "Элегантный трикотажный костюм для весеннего сезона"
  },
  {
    id: 4,
    name: "Костюм с шортами и рубашкой с принтом",
    price: 2910,
    originalPrice: 3910,
    category: "летний",
    image: "https://via.placeholder.com/300x400/FADADD/FF6B8B?text=С+принтом",
    sizes: ["S-42", "M-46"],
    colors: ["коричневый", "красный", "айвори", "розовый", "бежевый"],
    description: "Стильный костюм с рубашкой с принтом и шортами",
    discount: 25
  },
  {
    id: 5,
    name: "Костюм кимоно летний",
    price: 3036,
    category: "летний",
    image: "https://via.placeholder.com/300x400/FFB6C1/FF6B8B?text=Кимоно+летнее",
    sizes: ["S-42", "M-46"],
    colors: ["красный", "айвори", "коричневый", "бежевый"],
    description: "Легкое кимоно для жарких летних дней"
  },
  {
    id: 6,
    name: "Платье женское летнее белое с кружевом",
    price: 2182,
    originalPrice: 3182,
    category: "платья",
    image: "https://via.placeholder.com/300x400/FFFFFF/FF6B8B?text=Платье+с+кружевом",
    sizes: ["S-42", "M-46"],
    colors: ["белый"],
    description: "Нежное летнее платье с кружевными деталями",
    discount: 31
  }
];

export const categories = [
  "все",
  "повседневный",
  "летний", 
  "весенний",
  "платья"
];

// Функция для получения товаров со скидкой
export const getDiscountedProducts = () => {
  return products.filter(product => product.discount);
};

// Функция для расчета экономии
export const calculateSavings = (product) => {
  if (product.originalPrice && product.discount) {
    return product.originalPrice - product.price;
  }
  return 0;
};