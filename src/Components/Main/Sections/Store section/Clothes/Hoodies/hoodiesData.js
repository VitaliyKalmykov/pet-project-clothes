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
        name: 'GymBear Hoodie',
        price: 59.99,
        colors: [GymBearHoodieFront],
        images: {
            front: GymBearHoodieFront,
            side: GymBearHoodieSide,
        },
        gender: 'men',
    },
    {
        name: 'Zip Black Hoodie',
        price: 65.99,
        colors: [ZipBlackHoodieFront],
        images: {
            front: ZipBlackHoodieFront,
            side: ZipBlackHoodieSide,
        },
        gender: 'men',
    },
    // Unisex Hoodies
    {
        name: 'Black Hoodie',
        price: 55.99,
        colors: [HoodieBlackFront],
        images: {
            front: HoodieBlackFront,
            side: HoodieBlackSide,
        },
        gender: 'unisex',
    },
    {
        name: 'Beige Hoodie',
        price: 57.99,
        colors: [BeigeHoodieFront],
        images: {
            front: BeigeHoodieFront,
            side: BeigeHoodieSide,
        },
        gender: 'unisex',
    },
    {
        name: 'King Hoodie',
        price: 60.00,
        colors: [KingHoodieFront],
        images: {
            front: KingHoodieFront,
            side: KingHoodieSide,
        },
        gender: 'unisex',
    },
    {
        name: 'Zip Black Unisex Hoodie',
        price: 68.99,
        colors: [ZipHoodieUniFront],
        images: {
            front: ZipHoodieUniFront,
            side: ZipHoodieUniBlack,
        },
        gender: 'unisex',
    },
    // Women Hoodies
    {
        name: 'Boriva Hoodie',
        price: 63.99,
        colors: [BorivaHoodieFront],
        images: {
            front: BorivaHoodieFront,
            side: BorivaHoodieSide,
        },
        gender: 'women',
    },
    {
        name: 'Duck Hoodie',
        price: 58.99,
        colors: [DuckHoodieFront],
        images: {
            front: DuckHoodieFront,
            side: DuckHoodieSide,
        },
        gender: 'women',
    },
    {
        name: 'Ukraine Hoodie',
        price: 64.99,
        colors: [UkraineHoodieFront],
        images: {
            front: UkraineHoodieFront,
            side: UkraineHoodieSide,
        },
        gender: 'women',
    },
];

export default hoodiesData;



