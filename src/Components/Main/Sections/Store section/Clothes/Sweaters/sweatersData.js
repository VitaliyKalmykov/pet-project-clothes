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
        name: 'Beart Sweater',
        price: 45.99,
        colors: [BeartSweaterFront],
        images: {
            front: BeartSweaterFront,
            side: BeartSweaterSide,
        },
        gender: 'men',
    },
    {
        name: 'Beige Sweater',
        price: 48.99,
        colors: [BeigeSweaterFront],
        images: {
            front: BeigeSweaterFront,
            side: BeigeSweaterSide,
        },
        gender: 'men',
    },
    {
        name: 'Bird Sweater',
        price: 50.99,
        colors: [BirdSweaterFront],
        images: {
            front: BirdSweaterFront,
            side: BirdSweaterSide,
        },
        gender: 'men',
    },
    {
        name: 'Cat Sweater',
        price: 52.99,
        colors: [CatSweaterFront],
        images: {
            front: CatSweaterFront,
            side: CatSweaterSide,
        },
        gender: 'men',
    },
    // Unisex Sweaters
    {
        name: 'Beast Sweater',
        price: 55.99,
        colors: [BeastSweaterFront],
        images: {
            front: BeastSweaterFront,
            side: BeastSweaterSide,
        },
        gender: 'unisex',
    },
    {
        name: 'Lotos Sweater',
        price: 57.99,
        colors: [LotosSweaterFront],
        images: {
            front: LotosSweaterFront,
            side: LotosSweaterSide,
        },
        gender: 'unisex',
    },
    {
        name: 'Stars Sweater',
        price: 59.99,
        colors: [StarsSweaterFront],
        images: {
            front: StarsSweaterFront,
            side: StarsSweaterSide,
        },
        gender: 'unisex',
    },
    // Women Sweaters
    {
        name: 'Hygge Sweater',
        price: 60.99,
        colors: [HyggeSweaterFront],
        images: {
            front: HyggeSweaterFront,
            side: HyggeSweaterSide,
        },
        gender: 'women',
    },
    {
        name: 'Motyv Sweater',
        price: 62.99,
        colors: [MotyvSweaterFront],
        images: {
            front: MotyvSweaterFront,
            side: MotyvSweaterSide,
        },
        gender: 'women',
    },
    {
        name: 'Uvali Sweater',
        price: 64.99,
        colors: [UvaliSweaterFront],
        images: {
            front: UvaliSweaterFront,
            side: UvaliSweaterSide,
        },
        gender: 'women',
    },
];

export default sweatersData;
