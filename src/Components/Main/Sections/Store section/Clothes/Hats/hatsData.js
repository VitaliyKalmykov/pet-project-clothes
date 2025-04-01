const britishHatFront = '/assets/Clothes/Hats/SpringFall british hat/SpringFall_brittish_hat_front.webp';
const britishHatSide = '/assets/Clothes/Hats/SpringFall british hat/SpringFall_brittish_hat_side.webp';

const knittedHatFront = '/assets/Clothes/Hats/SpringFall knitted hat/SpringFall_knitted_hat_front.webp';
const knittedHatBack = '/assets/Clothes/Hats/SpringFall knitted hat/SpringFall_knitted_hat_back.webp';

const pumaHatFront = '/assets/Clothes/Hats/SpringFall puma hat/SpringFall_puma_hat_front.webp';
const pumaHatSide = '/assets/Clothes/Hats/SpringFall puma hat/SpringFall_puma_hat_side.webp';

const tuttaHatFront = '/assets/Clothes/Hats/SpringFall tutta hat/SpringFall_tutta_hat_front.webp';
const tuttaHatBack = '/assets/Clothes/Hats/SpringFall tutta hat/SpringFall_tutta_hat_back.webp';

const chickagoCapFront = '/assets/Clothes/Hats/Summer chickago cap/summer_chickago_cap_front.webp';
const chickagoCapSide = '/assets/Clothes/Hats/Summer chickago cap/summer_chickago_cap_side.webp';

const blackLenseCap = '/assets/Clothes/Hats/Summer lense cap/black_lense_cap.webp';

const primarkCap = '/assets/Clothes/Hats/Summer primak cap/summer_primak_cap.webp';

const winterAdHatFront = '/assets/Clothes/Hats/Winter ad hat/winter_ad_hat.webp';
const winterAdHatSide = '/assets/Clothes/Hats/Winter ad hat/winter_ad_hat_side.webp';

const winterClassicHatFront = '/assets/Clothes/Hats/Winter classic hat/winter_classic_hat_front.webp';
const winterClassicHatSide = '/assets/Clothes/Hats/Winter classic hat/winter_classic_hat_side.webp';

const winterFleeceHatFront = '/assets/Clothes/Hats/Winter fleece hat/winter_fleece_hat_front.webp';
const winterFleeceHatInside = '/assets/Clothes/Hats/Winter fleece hat/winter_fleece_hat_inside.webp';

const winterShortHatBlack = '/assets/Clothes/Hats/Winter short hat/winter_short_hat_black.webp';


const hatsData = [
    {
        id: 1,
        name: 'British Hat',
        price: 45.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [britishHatFront],
        images: {
            front: britishHatFront,
            side: britishHatSide,
        },
        description: 'Stylish British hat made of 100% wool. Ideal for transitional seasons like fall and spring, offering warmth and elegance to complete your look.',
        composition: '100% Wool',
    },
    {
        id: 2,
        name: 'Chicago Cap',
        price: 25.99,
        season: 'summer',
        gender: ['male'],
        colors: [chickagoCapFront],
        images: {
            front: chickagoCapFront,
            side: chickagoCapSide,
        },
        description: 'Lightweight Chicago cap perfect for summer. Made of cotton and polyester, it keeps you cool on hot days, combining style with breathability.',
        composition: '80% Cotton, 20% Polyester',
    },
    {
        id: 3,
        name: 'Knitted Hat',
        price: 35.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [knittedHatFront],
        images: {
            front: knittedHatFront,
            side: knittedHatBack,
        },
        description: 'Cozy and warm knitted hat, perfect for chilly weather. Made from a blend of wool and acrylic, it combines comfort with style for the colder seasons.',
        composition: '50% Wool, 50% Acrylic',
    },
    {
        id: 4,
        name: 'Puma Hat',
        price: 40.00,
        season: 'fall/spring',
        gender: ['female'],
        colors: [pumaHatFront],
        images: {
            front: pumaHatFront,
            side: pumaHatSide,
        },
        description: 'Sporty Puma hat made from 100% polyester. Offers both style and comfort, making it perfect for casual outings during fall and spring.',
        composition: '100% Polyester',
    },
    {
        id: 5,
        name: 'Tutta Hat',
        price: 38.00,
        season: 'fall/spring',
        gender: ['female'],
        colors: [tuttaHatFront],
        images: {
            front: tuttaHatFront,
            side: tuttaHatBack,
        },
        description: 'Elegant and fashionable Tutta hat made of wool and acrylic. The perfect accessory for the autumn and spring seasons, adding a chic touch to any outfit.',
        composition: '70% Wool, 30% Acrylic',
    },
    {
        id: 6,
        name: 'Primark Cap',
        price: 15.99,
        season: 'summer',
        gender: ['female'],
        colors: [primarkCap],
        images: {
            front: primarkCap,
        },
        description: 'Trendy Primark cap made of cotton, perfect for casual summer wear. Affordable yet stylish, it keeps you cool and fashionable on hot days.',
        composition: '100% Cotton',
    },
    {
        id: 7,
        name: 'Lense Cap',
        price: 22.99,
        season: 'summer',
        gender: ['male', 'female', 'unisex'],
        images: {
            front: blackLenseCap,
        },
        description: 'Versatile Lense cap in multiple colors. Made from a polyester-cotton blend, it’s perfect for any summer activity, offering both comfort and style for everyone.',
        composition: '65% Polyester, 35% Cotton',
    },
    {
        id: 8,
        name: 'Winter Ad Hat',
        price: 40.00,
        season: 'winter',
        gender: ['male', 'female', 'unisex'],
        colors: [winterAdHatFront],
        images: {
            front: winterAdHatFront,
            side: winterAdHatSide,
        },
        description: 'Winter Ad Hat made from wool and polyester, designed to provide extra warmth and coziness. Ideal for the coldest winter days, with a stylish advertisement twist.',
        composition: '80% Wool, 20% Polyester',
    },
    {
        id: 9,
        name: 'Winter Classic Hat',
        price: 50.00,
        season: 'winter',
        gender: ['male', 'female', 'unisex'],
        colors: [winterClassicHatFront],
        images: {
            front: winterClassicHatFront,
            side: winterClassicHatSide,
        },
        description: 'Classic winter hat made from wool and nylon. Perfect for both warmth and elegance, offering comfort while adding a refined touch to your winter wardrobe.',
        composition: '90% Wool, 10% Nylon',
    },
    {
        id: 10,
        name: 'Winter Fleece Hat',
        price: 30.99,
        season: 'winter',
        gender: ['male', 'female', 'unisex'],
        colors: [winterFleeceHatFront],
        images: {
            front: winterFleeceHatFront,
            side: winterFleeceHatInside,
        },
        description: 'Winter fleece-lined hat providing ultimate comfort and warmth. Made with 100% fleece, it keeps you cozy during the coldest winter days while being ultra-soft.',
        composition: '100% Fleece',
    },
    {
        id: 11,
        name: 'Winter Short Hat',
        price: 20.00,
        season: 'winter',
        gender: ['male', 'female', 'unisex'],
        images: {
            front: winterShortHatBlack,
        },
        description: 'Short-style winter hat made from a wool-acrylic blend. Available in various colors, it’s perfect for staying warm while keeping a casual, stylish look in winter.',
        composition: '50% Wool, 50% Acrylic',
    },
];

export default hatsData;