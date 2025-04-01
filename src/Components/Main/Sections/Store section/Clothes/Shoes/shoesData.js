const elevenShoesFront = '/assets/Clothes/Shoes/man 11 shoes/man_11_shoes_front.webp';
const elevenShoesSide = '/assets/Clothes/Shoes/man 11 shoes/man_11_shoes_side.webp';

const leonchenkoShoesFront = '/assets/Clothes/Shoes/man leonchenko shoes/man_leonchenko_shoes_front.webp';
const leonchenkoShoesSide = '/assets/Clothes/Shoes/man leonchenko shoes/man_leonchenko_shoes_side.webp';

const madiroShoesFront = '/assets/Clothes/Shoes/man madiro shoes/man_madiro_shoes_front.webp';
const madiroShoesSide = '/assets/Clothes/Shoes/man madiro shoes/man_madiro_shoes_side.webp';

const pavlinaShoesFront = '/assets/Clothes/Shoes/man pavlina shoes/man_pavlina_shoes_front.webp';
const pavlinaShoesSide = '/assets/Clothes/Shoes/man pavlina shoes/man_pavlina_shoes_side.webp';

const wingsShoesFront = '/assets/Clothes/Shoes/man wings shoes/man_wings_shoes_front.webp';
const wingsShoesSide = '/assets/Clothes/Shoes/man wings shoes/man_wings_shoes_side.webp';

const wElevenShoesFront = '/assets/Clothes/Shoes/women 11 shoes/women_11_shoes_front.webp';
const wElevenShoesSide = '/assets/Clothes/Shoes/women 11 shoes/women_11_shoes_side.webp';

const bellaShoesFront = '/assets/Clothes/Shoes/women bella shoes/women_bella_shoes_front.webp';
const bellaShoesSide = '/assets/Clothes/Shoes/women bella shoes/women_bella_shoes_side.webp';

const eternityShoesFront = '/assets/Clothes/Shoes/women eternity shoes/women_eternity_shoes_front.webp';
const eternityShoesSide = '/assets/Clothes/Shoes/women eternity shoes/women_eternity_shoes_side.webp';

const wMadiroShoesFront = '/assets/Clothes/Shoes/women madiro shoes/women_madiro_shoes_front.webp';
const wMadiroShoesSide = '/assets/Clothes/Shoes/women madiro shoes/women_madiro_shoes_side.webp';

const issaShoesFront = '/assets/Clothes/Shoes/women issa shoes/women_isse_shoes_front.webp';
const issaShoesSide = '/assets/Clothes/Shoes/women issa shoes/women_isse_shoes_side.webp';
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
        gender: ['male'],
        season: 'fall/spring',
        composition: 'Leather, Rubber, Textile',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Stylish and versatile shoes that offer comfort for everyday wear. The premium leather and rubber composition provides durability, while the textile ensures breathability, making them perfect for fall and spring seasons.',
    },
    {
        name: 'Leonchenko Shoes',
        price: 85.99,
        colors: [leonchenkoShoesFront],
        images: {
            front: leonchenkoShoesFront,
            side: leonchenkoShoesSide,
        },
        gender: ['male'],
        season: 'fall/spring',
        composition: 'Synthetic Leather, Rubber',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Modern shoes that combine sleek design and comfort. Made with synthetic leather and rubber for a stylish look and long-lasting wear, these shoes are perfect for daily activities during the fall and spring seasons.',
    },
    {
        name: 'Madiro Shoes',
        price: 89.99,
        colors: [madiroShoesFront],
        images: {
            front: madiroShoesFront,
            side: madiroShoesSide,
        },
        gender: ['male'],
        season: 'winter',
        composition: 'Canvas, Rubber',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'These casual shoes offer comfort and flexibility for outdoor activities. Made with breathable canvas and a durable rubber sole, they are ideal for a variety of occasions, providing all-day comfort during cooler weather.',
    },
    {
        name: 'Pavlina Shoes',
        price: 92.99,
        colors: [pavlinaShoesFront],
        images: {
            front: pavlinaShoesFront,
            side: pavlinaShoesSide,
        },
        gender: ['female'],
        season: 'fall/spring',
        composition: 'Textile, Leather',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'A blend of style and practicality, Pavlina shoes are crafted from durable textile and leather. Their comfortable fit and versatile design make them a perfect choice for both casual and semi-formal looks during fall and spring.',
    },
    {
        name: 'Wings Shoes',
        price: 95.99,
        colors: [wingsShoesFront],
        images: {
            front: wingsShoesFront,
            side: wingsShoesSide,
        },
        gender: ['female'],
        season: 'summer',
        composition: 'Leather, Textile',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Wings Shoes offer a stylish and durable option for everyday wear. Made with premium leather and textile, they provide comfort and support, making them perfect for various activities during the summer season.',
    },
    // Women Shoes
    {
        name: 'Women Eleven Shoes',
        price: 79.99,
        colors: [wElevenShoesFront],
        images: {
            front: wElevenShoesFront,
            side: wElevenShoesSide,
        },
        gender: ['female'],
        season: 'fall/spring',
        composition: 'Leather, Textile',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Fashion-forward women\'s shoes designed for maximum comfort and long-lasting wear. Made from high-quality leather and textile, they offer a perfect balance of style and functionality, ideal for fall and spring weather.',
    },
    {
        name: 'Bella Shoes',
        price: 83.99,
        colors: [bellaShoesFront],
        images: {
            front: bellaShoesFront,
            side: bellaShoesSide,
        },
        gender: ['female'],
        season: 'summer',
        composition: 'Leather, Rubber',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Bella shoes combine comfort and elegance, with a sleek leather exterior and durable rubber sole. Perfect for both casual and semi-formal occasions, they will keep you stylish and comfortable throughout the summer.',
    },
    {
        name: 'Eternity Shoes',
        price: 88.99,
        colors: [eternityShoesFront],
        images: {
            front: eternityShoesFront,
            side: eternityShoesSide,
        },
        gender: ['female'],
        season: 'winter',
        composition: 'Synthetic Leather, Rubber',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'These timeless shoes feature a modern twist with synthetic leather and rubber construction. Stylish, comfortable, and perfect for everyday wear, they are ideal for the winter season.',
    },
    {
        name: 'Women Madiro Shoes',
        price: 89.99,
        colors: [wMadiroShoesFront],
        images: {
            front: wMadiroShoesFront,
            side: wMadiroShoesSide,
        },
        gender: ['female'],
        season: 'fall/spring',
        composition: 'Canvas, Leather',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Comfortable and stylish, Madiro Shoes are crafted with breathable canvas and durable leather. Their versatile design makes them the perfect choice for various occasions, offering all-day comfort during the fall and spring months.',
    },
    {
        name: 'Issa Shoes',
        price: 91.99,
        colors: [issaShoesFront],
        images: {
            front: issaShoesFront,
            side: issaShoesSide,
        },
        gender: ['female'],
        season: 'winter',
        composition: 'Synthetic Leather, Rubber',
        sizes: [40, 41, 42, 43, 44, 45],
        description: 'Issa Shoes combine comfort, durability, and style with their synthetic leather upper and rubber sole. Ideal for everyday wear, these shoes are perfect for the winter season, offering a stylish and versatile option.',
    },
];

export default shoesData