const CrockPantsFront = '/assets/Clothes/Pants/man pants crock/man_pants_crock_front.webp';
const CrockPantsSide = '/assets/Clothes/Pants/man pants crock/man_pants_crock_side.webp';

const FromusPantsFront = '/assets/Clothes/Pants/man pants fromus/man_pants_fromus_front.webp';
const FromusPantsSide = '/assets/Clothes/Pants/man pants fromus/man_pants_fromus_side.webp';

const LagrandPantsFront = '/assets/Clothes/Pants/man pants lagrand/man_pants_lagrand_front.webp';
const LagrandPantsSide = '/assets/Clothes/Pants/man pants lagrand/man_pants_lagrand_side.webp';

const MilitaryPantsFront = '/assets/Clothes/Pants/man pants military/man_pants_military_front.webp';
const MilitaryPantsSide = '/assets/Clothes/Pants/man pants military/man_pants_military_side.webp';

const TurwayPantsFront = '/assets/Clothes/Pants/man pants turway/man_pants_turway_front.webp';
const TurwayPantsSide = '/assets/Clothes/Pants/man pants turway/man_pants_turway_side.webp';

const CuprumPantsFront = '/assets/Clothes/Pants/women pants cuprum/women_pants_cuprum_front.webp';
const CuprumPantsSide = '/assets/Clothes/Pants/women pants cuprum/women_pants_cuprum_side.webp';

const IssaPantsFront = '/assets/Clothes/Pants/women pants issa/women_pants_issa_front.webp';
const IssaPantsSide = '/assets/Clothes/Pants/women pants issa/women_pants_issa_side.webp';

const SeventeenPantsFront = '/assets/Clothes/Pants/women pants seventeen/women_pants_seventeen_front.webp';
const SeventeenPantsSide = '/assets/Clothes/Pants/women pants seventeen/women_pants_seventeen_side.webp';

const ShawkPantsFront = '/assets/Clothes/Pants/women pants shawk/women_pants_shawk_front.webp';
const ShawkPantsSide = '/assets/Clothes/Pants/women pants shawk/women_pants_shawk_side.webp';

const YourwayPantsFront = '/assets/Clothes/Pants/women pants yourway/women_pants_yourway_front.webp';
const YourwayPantsSide = '/assets/Clothes/Pants/women pants yourway/women_pants_yourway_side.webp';


const pantsData = [
    // Men Pants
    {
        id: 1,
        name: 'Crock Pants',
        price: 49.99,
        season: 'winter',
        gender: ['male'],
        colors: [CrockPantsFront],
        images: {
            front: CrockPantsFront,
            side: CrockPantsSide,
        },
        description: 'Comfortable and breathable Crock Pants, ideal for hot summer days. Perfect for casual outings or relaxed moments.',
        composition: '100% Cotton',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 2,
        name: 'Fromus Pants',
        price: 52.99,
        season: 'summer',
        gender: ['male'],
        colors: [FromusPantsFront],
        images: {
            front: FromusPantsFront,
            side: FromusPantsSide,
        },
        description: 'Fromus Pants with a slim-fit design, suitable for the warmer seasons. Crafted for a stylish and comfortable fit.',
        composition: '98% Cotton, 2% Spandex',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 3,
        name: 'Lagrand Pants',
        price: 54.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [LagrandPantsFront],
        images: {
            front: LagrandPantsFront,
            side: LagrandPantsSide,
        },
        description: 'Lagrand Pants offer a versatile look with their comfortable fit and stylish design. Perfect for the transitional seasons.',
        composition: '70% Wool, 30% Polyester',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 4,
        name: 'Military Pants',
        price: 56.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [MilitaryPantsFront],
        images: {
            front: MilitaryPantsFront,
            side: MilitaryPantsSide,
        },
        description: 'Tough yet stylish Military Pants, designed for men who value both fashion and functionality. Suitable for outdoor adventures.',
        composition: '65% Cotton, 35% Polyester',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: 5,
        name: 'Turway Pants',
        price: 58.99,
        season: 'fall/spring',
        gender: ['male'],
        colors: [TurwayPantsFront],
        images: {
            front: TurwayPantsFront,
            side: TurwayPantsSide,
        },
        description: 'Warm and durable Turway Pants, designed to keep you comfortable in cold weather. Great for winter outings or daily wear.',
        composition: '80% Wool, 20% Nylon',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    // Women Pants
    {
        id: 6,
        name: 'Cuprum Pants',
        price: 48.99,
        season: 'summer',
        gender: ['female'],
        colors: [CuprumPantsFront],
        images: {
            front: CuprumPantsFront,
            side: CuprumPantsSide,
        },
        description: 'Cuprum Pants for women, offering comfort and style during the hot summer months. Perfect for casual days or beach trips.',
        composition: '100% Cotton',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 7,
        name: 'Issa Pants',
        price: 50.99,
        season: 'summer',
        gender: ['female'],
        colors: [IssaPantsFront],
        images: {
            front: IssaPantsFront,
            side: IssaPantsSide,
        },
        description: 'Issa Pants for a trendy summer look. Lightweight and breathable, making them perfect for hot weather and outdoor activities.',
        composition: '95% Cotton, 5% Spandex',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 8,
        name: 'Seventeen Pants',
        price: 53.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [SeventeenPantsFront],
        images: {
            front: SeventeenPantsFront,
            side: SeventeenPantsSide,
        },
        description: 'Seventeen Pants for women offer an elegant and comfortable option for cooler seasons. Great for both work and casual wear.',
        composition: '70% Polyester, 30% Cotton',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 9,
        name: 'Shawk Pants',
        price: 55.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [ShawkPantsFront],
        images: {
            front: ShawkPantsFront,
            side: ShawkPantsSide,
        },
        description: 'Shawk Pants designed for women who want to combine style and comfort. Perfect for the fall and spring seasons.',
        composition: '65% Cotton, 35% Polyester',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    {
        id: 10,
        name: 'Yourway Pants',
        price: 57.99,
        season: 'fall/spring',
        gender: ['female'],
        colors: [YourwayPantsFront],
        images: {
            front: YourwayPantsFront,
            side: YourwayPantsSide,
        },
        description: 'Yourway Pants for women, designed to provide both warmth and style during the winter season. Ideal for colder weather.',
        composition: '80% Wool, 20% Nylon',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
];

export default pantsData;