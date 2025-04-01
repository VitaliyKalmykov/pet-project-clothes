const BeartSweaterFront = '/assets/Clothes/Sweaters/man sweater beart/man_sweater_beart_front.webp';
const BeartSweaterSide = '/assets/Clothes/Sweaters/man sweater beart/man_sweater_beart_side.webp';

const BeigeSweaterFront = '/assets/Clothes/Sweaters/man sweater beige/man_sweater_beige_front.webp';
const BeigeSweaterSide = '/assets/Clothes/Sweaters/man sweater beige/man_sweater_beige_side.webp';

const BirdSweaterFront = '/assets/Clothes/Sweaters/man sweater bird/man_sweater_bird_front.webp';
const BirdSweaterSide = '/assets/Clothes/Sweaters/man sweater bird/man_sweater_bird_side.webp';

const CatSweaterFront = '/assets/Clothes/Sweaters/man sweater cat/man_sweater_cat_front.webp';
const CatSweaterSide = '/assets/Clothes/Sweaters/man sweater cat/man_sweater_cat_side.webp';

const BeastSweaterFront = '/assets/Clothes/Sweaters/unisex sweater beast/unisex_sweater_beast_front.webp';
const BeastSweaterSide = '/assets/Clothes/Sweaters/unisex sweater beast/unisex_sweater_beast_side.webp';

const LotosSweaterFront = '/assets/Clothes/Sweaters/unisex sweater lotos/unisex_sweater_lotos_front.webp';
const LotosSweaterSide = '/assets/Clothes/Sweaters/unisex sweater lotos/unisex_sweater_lotos_side.webp';

const StarsSweaterFront = '/assets/Clothes/Sweaters/unisex sweater stars/unisex_sweater_stars_front.webp';
const StarsSweaterSide = '/assets/Clothes/Sweaters/unisex sweater stars/unisex_sweater_stars_side.webp';

const HyggeSweaterFront = '/assets/Clothes/Sweaters/women sweater hygge/women_sweater_hygge_front.webp';
const HyggeSweaterSide = '/assets/Clothes/Sweaters/women sweater hygge/women_sweater_hygge_side.webp';

const MotyvSweaterFront = '/assets/Clothes/Sweaters/women sweater motyv/women_sweater_motyv_front.webp';
const MotyvSweaterSide = '/assets/Clothes/Sweaters/women sweater motyv/women_sweater_motyv_side.webp';

const UvaliSweaterFront = '/assets/Clothes/Sweaters/women sweater uvali/women_sweater_uvali_front.webp';
const UvaliSweaterSide = '/assets/Clothes/Sweaters/women sweater uvali/women_sweater_uvali_side.webp';



const sweatersData = [
    // Men Sweaters
    {
        id: 1,
        name: 'Beart Sweater',
        price: 45.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [BeartSweaterFront],
        images: {
            front: BeartSweaterFront,
            side: BeartSweaterSide,
        },
        description: 'Comfortable and stylish Beart Sweater, perfect for cool fall or spring weather. A great addition to your wardrobe.',
        composition: '60% Cotton, 40% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 2,
        name: 'Beige Sweater',
        price: 48.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [BeigeSweaterFront],
        images: {
            front: BeigeSweaterFront,
            side: BeigeSweaterSide,
        },
        description: 'Beige Sweater offering a classic and versatile design. Perfect for layering during the transitional seasons.',
        composition: '55% Cotton, 45% Wool',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 3,
        name: 'Bird Sweater',
        price: 50.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [BirdSweaterFront],
        images: {
            front: BirdSweaterFront,
            side: BirdSweaterSide,
        },
        description: 'Bird Sweater with a unique design. A cozy option for cooler days in fall or spring.',
        composition: '70% Acrylic, 30% Wool',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 4,
        name: 'Cat Sweater',
        price: 52.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [CatSweaterFront],
        images: {
            front: CatSweaterFront,
            side: CatSweaterSide,
        },
        description: 'Cat Sweater with a soft feel, offering a perfect combination of comfort and style during the cooler months.',
        composition: '80% Wool, 20% Nylon',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    // Unisex Sweaters
    {
        id: 5,
        name: 'Beast Sweater',
        price: 55.99,
        season: 'fall/spring',
        gender: ['unisex'],
        colors: [BeastSweaterFront],
        images: {
            front: BeastSweaterFront,
            side: BeastSweaterSide,
        },
        description: 'Beast Sweater for unisex, offering a bold look with a relaxed fit. Ideal for both men and women in fall and spring.',
        composition: '60% Cotton, 40% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 6,
        name: 'Lotos Sweater',
        price: 57.99,
        season: 'fall/spring',
        gender: ['unisex'],
        colors: [LotosSweaterFront],
        images: {
            front: LotosSweaterFront,
            side: LotosSweaterSide,
        },
        description: 'Lotos Sweater with a clean and simple design. A comfortable choice for cool fall and spring days.',
        composition: '65% Wool, 35% Acrylic',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 7,
        name: 'Stars Sweater',
        price: 59.99,
        season: 'fall/spring',
        gender: ['unisex'],
        colors: [StarsSweaterFront],
        images: {
            front: StarsSweaterFront,
            side: StarsSweaterSide,
        },
        description: 'Stars Sweater brings comfort and warmth, perfect for the fall and spring seasons. Features a unique design.',
        composition: '70% Cotton, 30% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    // Women Sweaters
    {
        id: 8,
        name: 'Hygge Sweater',
        price: 60.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [HyggeSweaterFront],
        images: {
            front: HyggeSweaterFront,
            side: HyggeSweaterSide,
        },
        description: 'Hygge Sweater offering a relaxed fit with a cozy vibe. Perfect for fall and spring when you need comfort and warmth.',
        composition: '75% Cotton, 25% Wool',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 9,
        name: 'Motyv Sweater',
        price: 62.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [MotyvSweaterFront],
        images: {
            front: MotyvSweaterFront,
            side: MotyvSweaterSide,
        },
        description: 'Motyv Sweater with a stylish design and excellent warmth for the cooler months of fall and spring.',
        composition: '80% Wool, 20% Nylon',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 10,
        name: 'Uvali Sweater',
        price: 64.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [UvaliSweaterFront],
        images: {
            front: UvaliSweaterFront,
            side: UvaliSweaterSide,
        },
        description: 'Uvali Sweater for women, designed for comfort and style during the transitional seasons.',
        composition: '60% Cotton, 40% Acrylic',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
];

export default sweatersData;