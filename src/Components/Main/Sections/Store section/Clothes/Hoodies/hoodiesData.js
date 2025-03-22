import GymBearHoodieFront from '../../../../../../assets/Clothes/Hoodie/man hoodie GymBear/man_hoodie_gymbear_front.webp'
import GymBearHoodieSide from '../../../../../../assets/Clothes/Hoodie/man hoodie GymBear/man_hoodie_gymbear_side.webp'

import ZipBlackHoodieFront from '../../../../../../assets/Clothes/Hoodie/man hoodie ZipBlack/man_hoodie_zipblack_front.webp'
import ZipBlackHoodieSide from '../../../../../../assets/Clothes/Hoodie/man hoodie ZipBlack/man_hoodie_zipblack_side.webp'

import HoodieBlackFront from '../../../../../../assets/Clothes/Hoodie/unisex hoodie Black/unisex_hoodie_black_front.jpg'
import HoodieBlackSide from '../../../../../../assets/Clothes/Hoodie/unisex hoodie Black/unisex_hoodie_black_side.jpg'

import BeigeHoodieFront from '../../../../../../assets/Clothes/Hoodie/unisex hoodie Beige/unisex_hoodie_beige_front.webp'
import BeigeHoodieSide from '../../../../../../assets/Clothes/Hoodie/unisex hoodie Beige/unisex_hoodie_beige_side.webp'

import KingHoodieFront from '../../../../../../assets/Clothes/Hoodie/unisex hoodie King/unisex_hoodie_king_front.webp'
import KingHoodieSide from '../../../../../../assets/Clothes/Hoodie/unisex hoodie King/unisex_hoodie_king_side.webp'

import ZipHoodieUniFront from '../../../../../../assets/Clothes/Hoodie/unisex hoodie ZipBlack/unisex_hoodie_ZipBlack_front.webp'
import ZipHoodieUniBlack from '../../../../../../assets/Clothes/Hoodie/unisex hoodie ZipBlack/unisex_hoodie_ZipBlack_side.webp'

import BorivaHoodieFront from '../../../../../../assets/Clothes/Hoodie/woman hoodie Boriva/woman_hoodie_boriva_front.webp'
import BorivaHoodieSide from '../../../../../../assets/Clothes/Hoodie/woman hoodie Boriva/wooman_hoodie_boriva_side.webp'

import DuckHoodieFront from '../../../../../../assets/Clothes/Hoodie/woman hoodie Duck/woman_hoodie_duck_front.webp'
import DuckHoodieSide from '../../../../../../assets/Clothes/Hoodie/woman hoodie Duck/woman_hoodie_duck_side.webp'

import UkraineHoodieFront from '../../../../../../assets/Clothes/Hoodie/woman hoodie Ukraine/woman_hoodie_ukraine_front.webp'
import UkraineHoodieSide from '../../../../../../assets/Clothes/Hoodie/woman hoodie Ukraine/woman_hoodie_ukraine_side.webp'

const hoodiesData = [
    // Men Hoodies
    {
        id: 1,
        name: 'GymBear Hoodie',
        price: 59.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [GymBearHoodieFront],
        images: {
            front: GymBearHoodieFront,
            side: GymBearHoodieSide,
        },
        description: 'Stylish GymBear hoodie for men, perfect for both workouts and casual wear. Made for comfort and durability, it’s your go-to piece for a laid-back yet sporty look.',
        composition: '60% Cotton, 40% Polyester',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 2,
        name: 'Zip Black Hoodie',
        price: 65.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [ZipBlackHoodieFront],
        images: {
            front: ZipBlackHoodieFront,
            side: ZipBlackHoodieSide,
        },
        description: 'Classic Zip Black Hoodie for men, designed for a sleek and modern look. Its zip-up style and comfortable fabric make it a versatile piece for daily wear.',
        composition: '80% Cotton, 20% Polyester',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    // Unisex Hoodies
    {
        id: 3,
        name: 'Black Hoodie',
        price: 55.99,
        season: 'fall/spring',
        gender: ['unisex'],
        colors: [HoodieBlackFront],
        images: {
            front: HoodieBlackFront,
            side: HoodieBlackSide,
        },
        description: 'Black Hoodie for both men and women, offering the perfect balance of comfort and style. Ideal for casual outings, workouts, or lounging.',
        composition: '100% Cotton',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 4,
        name: 'Beige Hoodie',
        price: 57.99,
        season: 'fall/spring',
        gender: ['unisex'],
        colors: [BeigeHoodieFront],
        images: {
            front: BeigeHoodieFront,
            side: BeigeHoodieSide,
        },
        description: 'Versatile Beige Hoodie designed for both men and women. Its light and breathable material ensures comfort for a relaxed yet trendy look.',
        composition: '85% Cotton, 15% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    // Women Hoodies
    {
        id: 7,
        name: 'Boriva Hoodie',
        price: 63.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [BorivaHoodieFront],
        images: {
            front: BorivaHoodieFront,
            side: BorivaHoodieSide,
        },
        description: 'Boriva Hoodie for women, designed for both style and comfort. Ideal for autumn or spring, its soft fabric and trendy design make it a must-have.',
        composition: '80% Cotton, 20% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 8,
        name: 'Duck Hoodie',
        price: 58.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [DuckHoodieFront],
        images: {
            front: DuckHoodieFront,
            side: DuckHoodieSide,
        },
        description: 'Adorable Duck Hoodie for women, offering warmth and style in one package. Perfect for casual wear during fall or spring with its unique design.',
        composition: '60% Cotton, 40% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 9,
        name: 'Ukraine Hoodie',
        price: 64.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [UkraineHoodieFront],
        images: {
            front: UkraineHoodieFront,
            side: UkraineHoodieSide,
        },
        description: 'Ukraine Hoodie for women, showcasing pride and comfort. This unisex hoodie provides warmth and a bold statement for chilly days in fall or spring.',
        composition: '75% Cotton, 25% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
];

export default hoodiesData;
