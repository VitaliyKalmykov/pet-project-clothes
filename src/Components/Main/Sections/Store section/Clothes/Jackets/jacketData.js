import asymetryJacketFront from '../../../../../../assets/Clothes/Jackets/man asymetry jacket/man_asymetry_jacket_front.webp'
import asymetryJacketSide from '../../../../../../assets/Clothes/Jackets/man asymetry jacket/man_asymetry_jacket_side.webp'

import baqJacketFront from '../../../../../../assets/Clothes/Jackets/man baq jacket/man_baq_jacket_front.webp'
import baqJacketSide from '../../../../../../assets/Clothes/Jackets/man baq jacket/man_baq_jacket_side.webp'

import krimsonJacketFront from '../../../../../../assets/Clothes/Jackets/man krimson jacket/man_krimson_jacket_front.webp'
import krimsonJacketSide from '../../../../../../assets/Clothes/Jackets/man krimson jacket/man_krimson_jacket_side.webp'

import turwearJacketFront from '../../../../../../assets/Clothes/Jackets/man turwear jacket/man_turwear_jacket_front.webp'
import turwearJacketSide from '../../../../../../assets/Clothes/Jackets/man turwear jacket/man_turwear_jacket_side.webp'

import arrowJacketFront from '../../../../../../assets/Clothes/Jackets/women arrow jacket/women_arrow_jacket_front.webp'
import arrowJacketSide from '../../../../../../assets/Clothes/Jackets/women arrow jacket/women_arrow_jacket_side.webp'

import dyvaJacketFront from '../../../../../../assets/Clothes/Jackets/women dyvva jacket/women_dyvva_jacket_front.webp'
import dyvaJacketSide from '../../../../../../assets/Clothes/Jackets/women dyvva jacket/women_dyva_jacket_side.webp'

import hyggeJacketFront from '../../../../../../assets/Clothes/Jackets/women hygge jacket/women_hygge_jacket_front.webp'
import hyggeJacketSide from '../../../../../../assets/Clothes/Jackets/women hygge jacket/women_hygge_jacket_side.webp'

import vymmaJacketFront from '../../../../../../assets/Clothes/Jackets/women vymma jacket/women_vymma_jacket_front.webp'
import vymmaJacketSide from '../../../../../../assets/Clothes/Jackets/women vymma jacket/women_vymma_jacket_side.webp'

const jacketsData = [
    // Men Jackets
    {
        id: 1,
        name: 'Asymmetry Jacket',
        price: 119.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [asymetryJacketFront],
        images: {
            front: asymetryJacketFront,
            side: asymetryJacketSide,
        },
        description: 'Stylish and modern Asymmetry Jacket for men. Perfect for transitional weather with its asymmetrical design and comfortable fit.',
        composition: '60% Polyester, 40% Wool',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 2,
        name: 'Baq Jacket',
        price: 125.99,
        season: 'winter',
        gender: ['male'],
        colors: [baqJacketFront],
        images: {
            front: baqJacketFront,
            side: baqJacketSide,
        },
        description: 'The Baq Jacket offers a versatile look, ideal for both casual and semi-formal occasions. Made to provide comfort and style.',
        composition: '70% Polyester, 30% Wool',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 3,
        name: 'Krimson Jacket',
        price: 129.99,
        season: 'winter',
        gender: ['male'],
        colors: [krimsonJacketFront],
        images: {
            front: krimsonJacketFront,
            side: krimsonJacketSide,
        },
        description: 'Krimson Jacket for men, designed to bring both warmth and style during colder months. Perfect for layering over any outfit.',
        composition: '80% Cotton, 20% Polyester',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 4,
        name: 'Turwear Jacket',
        price: 135.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [turwearJacketFront],
        images: {
            front: turwearJacketFront,
            side: turwearJacketSide,
        },
        description: 'Turwear Jacket, a durable and stylish option for men, perfect for the winter season. Made with high-quality materials for added comfort.',
        composition: '90% Wool, 10% Nylon',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    // Women Jackets
    {
        id: 5,
        name: 'Arrow Jacket',
        price: 118.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [arrowJacketFront],
        images: {
            front: arrowJacketFront,
            side: arrowJacketSide,
        },
        description: 'Arrow Jacket designed for women, offering a sleek look for cooler weather. Its simple yet elegant design makes it a perfect addition to any wardrobe.',
        composition: '75% Cotton, 25% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 6,
        name: 'Dyva Jacket',
        price: 122.99,
        season: 'winter',
        gender: ['female'],
        colors: [dyvaJacketFront],
        images: {
            front: dyvaJacketFront,
            side: dyvaJacketSide,
        },
        description: 'Dyva Jacket for women, offering a combination of comfort and modern style. Ideal for both casual and semi-formal occasions.',
        composition: '80% Polyester, 20% Cotton',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 7,
        name: 'Hygge Jacket',
        price: 127.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [hyggeJacketFront],
        images: {
            front: hyggeJacketFront,
            side: hyggeJacketSide,
        },
        description: 'Hygge Jacket designed for women, providing comfort and warmth during chilly months. Its cozy feel is perfect for the fall and winter seasons.',
        composition: '70% Wool, 30% Acrylic',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 8,
        name: 'Vymma Jacket',
        price: 132.99,
        season: 'winter',
        gender: ['female'],
        colors: [vymmaJacketFront],
        images: {
            front: vymmaJacketFront,
            side: vymmaJacketSide,
        },
        description: 'Vymma Jacket for women, combining style with warmth for the colder months. Ideal for layering, it provides both functionality and fashion.',
        composition: '65% Polyester, 35% Wool',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
];

export default jacketsData;