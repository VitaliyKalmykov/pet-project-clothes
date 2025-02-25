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
        name: 'Asymetry Jacket',
        price: 119.99,
        colors: [asymetryJacketFront],
        images: {
            front: asymetryJacketFront,
            side: asymetryJacketSide,
        },
        gender: 'men',
    },
    {
        name: 'Baq Jacket',
        price: 125.99,
        colors: [baqJacketFront],
        images: {
            front: baqJacketFront,
            side: baqJacketSide,
        },
        gender: 'men',
    },
    {
        name: 'Krimson Jacket',
        price: 129.99,
        colors: [krimsonJacketFront],
        images: {
            front: krimsonJacketFront,
            side: krimsonJacketSide,
        },
        gender: 'men',
    },
    {
        name: 'Turwear Jacket',
        price: 135.99,
        colors: [turwearJacketFront],
        images: {
            front: turwearJacketFront,
            side: turwearJacketSide,
        },
        gender: 'men',
    },
    // Women Jackets
    {
        name: 'Arrow Jacket',
        price: 118.99,
        colors: [arrowJacketFront],
        images: {
            front: arrowJacketFront,
            side: arrowJacketSide,
        },
        gender: 'women',
    },
    {
        name: 'Dyva Jacket',
        price: 122.99,
        colors: [dyvaJacketFront],
        images: {
            front: dyvaJacketFront,
            side: dyvaJacketSide,
        },
        gender: 'women',
    },
    {
        name: 'Hygge Jacket',
        price: 127.99,
        colors: [hyggeJacketFront],
        images: {
            front: hyggeJacketFront,
            side: hyggeJacketSide,
        },
        gender: 'women',
    },
    {
        name: 'Vymma Jacket',
        price: 132.99,
        colors: [vymmaJacketFront],
        images: {
            front: vymmaJacketFront,
            side: vymmaJacketSide,
        },
        gender: 'women',
    },
];

export default jacketsData;
