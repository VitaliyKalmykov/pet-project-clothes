import CrockPantsFront from '../../../../../../assets/Clothes/Pants/man pants crock/man_pants_crock_front.webp'
import CrockPantsSide from '../../../../../../assets/Clothes/Pants/man pants crock/man_pants_crock_side.webp'

import FromusPantsFront from '../../../../../../assets/Clothes/Pants/man pants fromus/man_pants_fromus_front.webp'
import FromusPantsSide from '../../../../../../assets/Clothes/Pants/man pants fromus/man_pants_fromus_side.webp'

import LagrandPantsFront from '../../../../../../assets/Clothes/Pants/man pants lagrand/man_pants_lagrand_front.webp'
import LagrandPantsSide from '../../../../../../assets/Clothes/Pants/man pants lagrand/man_pants_lagrand_side.webp'

import MilitaryPantsFront from '../../../../../../assets/Clothes/Pants/man pants military/man_pants_military_front.webp'
import MilitaryPantsSide from '../../../../../../assets/Clothes/Pants/man pants military/man_pants_military_side.webp'

import TurwayPantsFront from '../../../../../../assets/Clothes/Pants/man pants turway/man_pants_turway_front.webp'
import TurwayPantsSide from '../../../../../../assets/Clothes/Pants/man pants turway/man_pants_turway_side.webp'

import CuprumPantsFront from '../../../../../../assets/Clothes/Pants/women pants cuprum/women_pants_cuprum_front.webp'
import CuprumPantsSide from '../../../../../../assets/Clothes/Pants/women pants cuprum/women_pants_cuprum_side.webp'

import IssaPantsFront from '../../../../../../assets/Clothes/Pants/women pants issa/women_pants_issa_front.webp'
import IssaPantsSide from '../../../../../../assets/Clothes/Pants/women pants issa/women_pants_issa_side.webp'

import SeventeenPantsFront from '../../../../../../assets/Clothes/Pants/women pants seventeen/women_pants_seventeen_front.webp'
import SeventeenPantsSide from '../../../../../../assets/Clothes/Pants/women pants seventeen/women_pants_seventeen_side.webp'

import ShawkPantsFront from '../../../../../../assets/Clothes/Pants/women pants shawk/women_pants_shawk_front.webp'
import ShawkPantsSide from '../../../../../../assets/Clothes/Pants/women pants shawk/women_pants_shawk_side.webp'

import YourwayPantsFront from '../../../../../../assets/Clothes/Pants/women pants yourway/women_pants_yourway_front.webp'
import YourwayPantsSide from '../../../../../../assets/Clothes/Pants/women pants yourway/women_pants_yourway_side.webp'

const pantsData = [
    // Men Pants
    {
        name: 'Crock Pants',
        price: 49.99,
        colors: [CrockPantsFront],
        images: {
            front: CrockPantsFront,
            side: CrockPantsSide,
        },
        gender: 'men',
    },
    {
        name: 'Fromus Pants',
        price: 52.99,
        colors: [FromusPantsFront],
        images: {
            front: FromusPantsFront,
            side: FromusPantsSide,
        },
        gender: 'men',
    },
    {
        name: 'Lagrand Pants',
        price: 54.99,
        colors: [LagrandPantsFront],
        images: {
            front: LagrandPantsFront,
            side: LagrandPantsSide,
        },
        gender: 'men',
    },
    {
        name: 'Military Pants',
        price: 56.99,
        colors: [MilitaryPantsFront],
        images: {
            front: MilitaryPantsFront,
            side: MilitaryPantsSide,
        },
        gender: 'men',
    },
    {
        name: 'Turway Pants',
        price: 58.99,
        colors: [TurwayPantsFront],
        images: {
            front: TurwayPantsFront,
            side: TurwayPantsSide,
        },
        gender: 'men',
    },
    // Women Pants
    {
        name: 'Cuprum Pants',
        price: 48.99,
        colors: [CuprumPantsFront],
        images: {
            front: CuprumPantsFront,
            side: CuprumPantsSide,
        },
        gender: 'women',
    },
    {
        name: 'Issa Pants',
        price: 50.99,
        colors: [IssaPantsFront],
        images: {
            front: IssaPantsFront,
            side: IssaPantsSide,
        },
        gender: 'women',
    },
    {
        name: 'Seventeen Pants',
        price: 53.99,
        colors: [SeventeenPantsFront],
        images: {
            front: SeventeenPantsFront,
            side: SeventeenPantsSide,
        },
        gender: 'women',
    },
    {
        name: 'Shawk Pants',
        price: 55.99,
        colors: [ShawkPantsFront],
        images: {
            front: ShawkPantsFront,
            side: ShawkPantsSide,
        },
        gender: 'women',
    },
    {
        name: 'Yourway Pants',
        price: 57.99,
        colors: [YourwayPantsFront],
        images: {
            front: YourwayPantsFront,
            side: YourwayPantsSide,
        },
        gender: 'women',
    },
];

export default pantsData;
