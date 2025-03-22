import BeartSweaterFront from '../../../../../../assets/Clothes/Sweaters/man sweater beart/man_sweater_beart_front.webp'
import BeartSweaterSide from '../../../../../../assets/Clothes/Sweaters/man sweater beart/man_sweater_beart_side.webp'

import BeigeSweaterFront from '../../../../../../assets/Clothes/Sweaters/man sweater beige/man_sweater_beige_front.webp'
import BeigeSweaterSide from '../../../../../../assets/Clothes/Sweaters/man sweater beige/man_sweater_beige_side.webp'

import BirdSweaterFront from '../../../../../../assets/Clothes/Sweaters/man sweater bird/man_sweater_bird_front.webp'
import BirdSweaterSide from '../../../../../../assets/Clothes/Sweaters/man sweater bird/man_sweater_bird_side.webp'

import CatSweaterFront from '../../../../../../assets/Clothes/Sweaters/man sweater cat/man_sweater_cat_front.webp'
import CatSweaterSide from '../../../../../../assets/Clothes/Sweaters/man sweater cat/man_sweater_cat_side.webp'

import BeastSweaterFront from '../../../../../../assets/Clothes/Sweaters/unisex sweater beast/unisex_sweater_beast_front.webp'
import BeastSweaterSide from '../../../../../../assets/Clothes/Sweaters/unisex sweater beast/unisex_sweater_beast_side.webp'

import LotosSweaterFront from '../../../../../../assets/Clothes/Sweaters/unisex sweater lotos/unisex_sweater_lotos_front.webp'
import LotosSweaterSide from '../../../../../../assets/Clothes/Sweaters/unisex sweater lotos/unisex_sweater_lotos_side.webp'

import StarsSweaterFront from '../../../../../../assets/Clothes/Sweaters/unisex sweater stars/unisex_sweater_stars_front.webp'
import StarsSweaterSide from '../../../../../../assets/Clothes/Sweaters/unisex sweater stars/unisex_sweater_stars_side.webp'

import HyggeSweaterFront from '../../../../../../assets/Clothes/Sweaters/women sweater hygge/women_sweater_hygge_front.webp'
import HyggeSweaterSide from '../../../../../../assets/Clothes/Sweaters/women sweater hygge/women_sweater_hygge_side.webp'

import MotyvSweaterFront from '../../../../../../assets/Clothes/Sweaters/women sweater motyv/women_sweater_motyv_front.webp'
import MotyvSweaterSide from '../../../../../../assets/Clothes/Sweaters/women sweater motyv/women_sweater_motyv_side.webp'

import UvaliSweaterFront from '../../../../../../assets/Clothes/Sweaters/women sweater uvali/women_sweater_uvali_front.webp'
import UvaliSweaterSide from '../../../../../../assets/Clothes/Sweaters/women sweater uvali/women_sweater_uvali_side.webp'

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