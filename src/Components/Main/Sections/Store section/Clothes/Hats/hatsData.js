import britishHatFront from '../../../../../../assets/Clothes/Hats/SpringFall british hat/SpringFall_brittish_hat_front.webp'
import britishHatSide from '../../../../../../assets/Clothes/Hats/SpringFall british hat/SpringFall_brittish_hat_side.webp'

import knittedHatFront from '../../../../../../assets/Clothes/Hats/SpringFall knitted hat/SpringFall_knitted_hat_front.webp';
import knittedHatBack from '../../../../../../assets/Clothes/Hats/SpringFall knitted hat/SpringFall_knitted_hat_back.webp';

import pumaHatFront from '../../../../../../assets/Clothes/Hats/SpringFall puma hat/SpringFall_puma_hat_front.webp';
import pumaHatSide from '../../../../../../assets/Clothes/Hats/SpringFall puma hat/SpringFall_puma_hat_side.webp';

import tuttaHatFront from '../../../../../../assets/Clothes/Hats/SpringFall tutta hat/SpringFall_tutta_hat_front.webp';
import tuttaHatBack from '../../../../../../assets/Clothes/Hats/SpringFall tutta hat/SpringFall_tutta_hat_back.webp';

import chickagoCapFront from '../../../../../../assets/Clothes/Hats/Summer chickago cap/summer_chickago_cap_front.webp'
import chickagoCapSide from '../../../../../../assets/Clothes/Hats/Summer chickago cap/summer_chickago_cap_side.webp'

import blackLenseCap from '../../../../../../assets/Clothes/Hats/Summer lense cap/black_lense_cap.webp'
import brownLenseCap from '../../../../../../assets/Clothes/Hats/Summer lense cap/brown_lense_cap.webp'
import whiteLenseCap from '../../../../../../assets/Clothes/Hats/Summer lense cap/White_lense_cap.webp'
import yellowLenseCap from '../../../../../../assets/Clothes/Hats/Summer lense cap/Yellow_lense_cap.webp'

import primarkCap from '../../../../../../assets/Clothes/Hats/Summer primak cap/summer_primak_cap.webp';

import winterAdHatFront from '../../../../../../assets/Clothes/Hats/Winter ad hat/winter_ad_hat.webp'
import winterAdHatSide from '../../../../../../assets/Clothes/Hats/Winter ad hat/winter_ad_hat_side.webp'

import winterClassicHatFront from '../../../../../../assets/Clothes/Hats/Winter classic hat/winter_classic_hat_front.webp';
import winterClassicHatSide from '../../../../../../assets/Clothes/Hats/Winter classic hat/winter_classic_hat_side.webp';

import winterFleeceHatFront from '../../../../../../assets/Clothes/Hats/Winter fleece hat/winter_fleece_hat_front.webp'
import winterFleeceHatInside from '../../../../../../assets/Clothes/Hats/Winter fleece hat/winter_fleece_hat_inside.webp'

import winterShortHatBlack from '../../../../../../assets/Clothes/Hats/Winter short hat/winter_short_hat_black.webp'
import winterShortHatBlue from '../../../../../../assets/Clothes/Hats/Winter short hat/winter_short_hat_blue.webp'
import winterShortHatRed from '../../../../../../assets/Clothes/Hats/Winter short hat/winter_short_hat_red.webp'
import winterShortHatBrightRed from '../../../../../../assets/Clothes/Hats/Winter short hat/winter_short_hat_bright_red.webp'

const hatsData = [
    // Men - SpringFall
    {
        name: 'British Hat',
        price: 45.99,
        colors: [britishHatFront],
        images: {
            front: britishHatFront,
            side: britishHatSide,
        },
        season: 'springFall',
        gender: 'men',
    },
    // Men - Summer
    {
        name: 'Chicago Cap',
        price: 25.99,
        colors: [chickagoCapFront],
        images: {
            front: chickagoCapFront,
            side: chickagoCapSide,
        },
        season: 'summer',
        gender: 'men',
    },
    // Men - Winter
    {
        name: 'Winter Ad Hat',
        price: 40.00,
        colors: [winterAdHatFront],
        images: {
            front: winterAdHatFront,
            side: winterAdHatSide,
        },
        season: 'winter',
        gender: 'men',
    },
    // Women - SpringFall
    {
        name: 'Knitted Hat',
        price: 35.99,
        colors: [knittedHatFront],
        images: {
            front: knittedHatFront,
            side: knittedHatBack,
        },
        season: 'springFall',
        gender: 'women',
    },
    {
        name: 'Puma Hat',
        price: 40.00,
        colors: [pumaHatFront],
        images: {
            front: pumaHatFront,
            side: pumaHatSide,
        },
        season: 'springFall',
        gender: 'women',
    },
    {
        name: 'Tutta Hat',
        price: 38.00,
        colors: [tuttaHatFront],
        images: {
            front: tuttaHatFront,
            side: tuttaHatBack,
        },
        season: 'springFall',
        gender: 'women',
    },
    // Women - Summer
    {
        name: 'Primark Cap',
        price: 15.99,
        colors: [primarkCap],
        images: {
            front: primarkCap,
        },
        season: 'summer',
        gender: 'women',
    },
    // Unisex - Summer
    {
        name: 'Lense Cap',
        price: 22.99,
        colors: [
            blackLenseCap, whiteLenseCap, yellowLenseCap, brownLenseCap
        ],
        images: {
            front: blackLenseCap,
        },
        season: 'summer',
        gender: 'unisex',
    },
    // Unisex - Winter
    {
        name: 'Winter Ad Hat',
        price: 40.00,
        colors: [winterAdHatFront],
        images: {
            front: winterAdHatFront,
            side: winterAdHatSide,
        },
        season: 'winter',
        gender: 'unisex',
    },
    {
        name: 'Winter Classic Hat',
        price: 50.00,
        colors: [winterClassicHatFront],
        images: {
            front: winterClassicHatFront,
            side: winterClassicHatSide,
        },
        season: 'winter',
        gender: 'unisex',
    },
    {
        name: 'Winter Fleece Hat',
        price: 30.99,
        colors: [winterFleeceHatFront],
        images: {
            front: winterFleeceHatFront,
            side: winterFleeceHatInside,
        },
        season: 'winter',
        gender: 'unisex',
    },
    {
        name: 'Winter Short Hat',
        price: 20.00,
        colors: [
            winterShortHatBlack, winterShortHatBlue, winterShortHatRed, winterShortHatBrightRed
        ],
        images: {
            front: winterShortHatBlack,
        },
        season: 'winter',
        gender: 'unisex',
    },
];

export default hatsData;