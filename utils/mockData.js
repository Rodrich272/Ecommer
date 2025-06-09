const mockCategories = [
    { id: 1, name: 'Laptops', slug: 'laptops', icon: 'fas fa-laptop', count: 45 },
    { id: 2, name: 'Computadoras', slug: 'computadoras', icon: 'fas fa-desktop', count: 32 },
    { id: 3, name: 'Componentes', slug: 'componentes', icon: 'fas fa-microchip', count: 78 },
    { id: 4, name: 'Accesorios', slug: 'accesorios', icon: 'fas fa-mouse', count: 156 }
];

const mockProducts = [
    {
        id: 1,
        name: 'Laptop Gaming ASUS ROG',
        description: 'Laptop gaming de alto rendimiento con RTX 4060',
        price: 25999,
        originalPrice: 29999,
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
        category: 'laptops',
        brand: 'ASUS',
        model: 'ROG Strix G15'
    },
    {
        id: 2,
        name: 'MacBook Air M2',
        description: 'MacBook Air con chip M2 de Apple, 13 pulgadas',
        price: 32999,
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
        category: 'laptops',
        brand: 'Apple',
        model: 'MacBook Air'
    },
    {
        id: 3,
        name: 'PC Gaming RGB',
        description: 'Computadora gaming completa con iluminación RGB',
        price: 18999,
        originalPrice: 21999,
        image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400',
        category: 'computadoras',
        brand: 'Custom Build',
        model: 'Gaming Pro'
    },
    {
        id: 4,
        name: 'Tarjeta Gráfica RTX 4070',
        description: 'NVIDIA GeForce RTX 4070 12GB GDDR6X',
        price: 15999,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
        category: 'componentes',
        brand: 'NVIDIA',
        model: 'RTX 4070'
    },
    {
        id: 5,
        name: 'Procesador Intel i7',
        description: 'Intel Core i7-13700K 13va generación',
        price: 8999,
        image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
        category: 'componentes',
        brand: 'Intel',
        model: 'i7-13700K'
    },
    {
        id: 6,
        name: 'Monitor Gaming 27"',
        description: 'Monitor gaming 27" 144Hz QHD',
        price: 7999,
        originalPrice: 9999,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
        category: 'accesorios',
        brand: 'Samsung',
        model: 'Odyssey G7'
    },
    {
        id: 7,
        name: 'Teclado Mecánico RGB',
        description: 'Teclado mecánico gaming con switches Cherry MX',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
        category: 'accesorios',
        brand: 'Corsair',
        model: 'K95 RGB'
    },
    {
        id: 8,
        name: 'Mouse Gaming Inalámbrico',
        description: 'Mouse gaming inalámbrico de alta precisión',
        price: 1999,
        originalPrice: 2499,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
        category: 'accesorios',
        brand: 'Logitech',
        model: 'G Pro X'
    },
    {
        id: 9,
        name: 'SSD NVMe 1TB',
        description: 'Disco sólido NVMe PCIe 4.0 de 1TB',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400',
        category: 'componentes',
        brand: 'Samsung',
        model: '980 PRO'
    },
    {
        id: 10,
        name: 'Laptop Dell XPS 13',
        description: 'Ultrabook premium con pantalla InfinityEdge',
        price: 28999,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
        category: 'laptops',
        brand: 'Dell',
        model: 'XPS 13'
    }
];
