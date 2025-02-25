import elevenShoesFront from '../../../../../../assets/Clothes/Shoes/man 11 shoes/man_11_shoes_front.webp'
import elevenShoesSide from '../../../../../../assets/Clothes/Shoes/man 11 shoes/man_11_shoes_side.webp'

import leonchenkoShoesFront from '../../../../../../assets/Clothes/Shoes/man leonchenko shoes/man_leonchenko_shoes_front.webp'
import leonchenkoShoesSide from '../../../../../../assets/Clothes/Shoes/man leonchenko shoes/man_leonchenko_shoes_side.webp'

import madiroShoesFront from '../../../../../../assets/Clothes/Shoes/man madiro shoes/man_madiro_shoes_front.webp'
import madiroShoesSide from '../../../../../../assets/Clothes/Shoes/man madiro shoes/man_madiro_shoes_side.webp'

import pavlinaShoesFront from '../../../../../../assets/Clothes/Shoes/man pavlina shoes/man_pavlina_shoes_front.webp'
import pavlinaShoesSide from '../../../../../../assets/Clothes/Shoes/man pavlina shoes/man_pavlina_shoes_side.webp'

import wingsShoesFront from '../../../../../../assets/Clothes/Shoes/man wings shoes/man_wings_shoes_front.webp'
import wingsShoesSide from '../../../../../../assets/Clothes/Shoes/man wings shoes/man_wings_shoes_side.webp'

import wElevenShoesFront from '../../../../../../assets/Clothes/Shoes/women 11 shoes/women_11_shoes_front.webp'
import wElevenShoesSide from '../../../../../../assets/Clothes/Shoes/women 11 shoes/women_11_shoes_side.webp'

import bellaShoesFront from '../../../../../../assets/Clothes/Shoes/women bella shoes/women_bella_shoes_front.webp'
import bellaShoesSide from '../../../../../../assets/Clothes/Shoes/women bella shoes/women_bella_shoes_side.webp'

import eternityShoesFront from '../../../../../../assets/Clothes/Shoes/women eternity shoes/women_eternity_shoes_front.webp'
import eternityShoesSide from '../../../../../../assets/Clothes/Shoes/women eternity shoes/women_eternity_shoes_side.webp'

import wMadiroShoesFront from '../../../../../../assets/Clothes/Shoes/man madiro shoes/man_madiro_shoes_front.webp'
import wMadiroShoesSide from '../../../../../../assets/Clothes/Shoes/man madiro shoes/man_madiro_shoes_side.webp'

import issaShoesFront from '../../../../../../assets/Clothes/Shoes/women issa shoes/women_isse_shoes_front.webp'
import issaShoesSide from '../../../../../../assets/Clothes/Shoes/women issa shoes/women_isse_shoes_front.webp'

const shoesData = [
    // Men Shoes
    {
        name: 'Eleven Shoes',
        price: 79.99,
        colors: [elevenShoesFront],
        images: {
            front: elevenShoesFront,
            side: elevenShoesSide,
        },
        gender: 'men',
    },
    {
        name: 'Leonchenko Shoes',
        price: 85.99,
        colors: [leonchenkoShoesFront],
        images: {
            front: leonchenkoShoesFront,
            side: leonchenkoShoesSide,
        },
        gender: 'men',
    },
    {
        name: 'Madiro Shoes',
        price: 89.99,
        colors: [madiroShoesFront],
        images: {
            front: madiroShoesFront,
            side: madiroShoesSide,
        },
        gender: 'men',
    },
    {
        name: 'Pavlina Shoes',
        price: 92.99,
        colors: [pavlinaShoesFront],
        images: {
            front: pavlinaShoesFront,
            side: pavlinaShoesSide,
        },
        gender: 'men',
    },
    {
        name: 'Wings Shoes',
        price: 95.99,
        colors: [wingsShoesFront],
        images: {
            front: wingsShoesFront,
            side: wingsShoesSide,
        },
        gender: 'men',
    },
    // Women Shoes
    {
        name: 'Eleven Shoes',
        price: 79.99,
        colors: [wElevenShoesFront],
        images: {
            front: wElevenShoesFront,
            side: wElevenShoesSide,
        },
        gender: 'women',
    },
    {
        name: 'Bella Shoes',
        price: 83.99,
        colors: [bellaShoesFront],
        images: {
            front: bellaShoesFront,
            side: bellaShoesSide,
        },
        gender: 'women',
    },
    {
        name: 'Eternity Shoes',
        price: 88.99,
        colors: [eternityShoesFront],
        images: {
            front: eternityShoesFront,
            side: eternityShoesSide,
        },
        gender: 'women',
    },
    {
        name: 'Madiro Shoes',
        price: 89.99,
        colors: [wMadiroShoesFront],
        images: {
            front: wMadiroShoesFront,
            side: wMadiroShoesSide,
        },
        gender: 'women',
    },
    {
        name: 'Issa Shoes',
        price: 91.99,
        colors: [issaShoesFront],
        images: {
            front: issaShoesFront,
            side: issaShoesSide,
        },
        gender: 'women',
    },
];

export default shoesData;
