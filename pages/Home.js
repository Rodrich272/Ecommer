function Home({ onAddToCart }) {
    try {
        const [featuredProducts, setFeaturedProducts] = React.useState([]);
        const [categories, setCategories] = React.useState([]);

        React.useEffect(() => {
            setFeaturedProducts(mockProducts.slice(0, 6));
            setCategories(mockCategories);
        }, []);

        return (
            <div data-name="home" data-file="pages/Home.js">
                {/* Hero Section */}
                <section className="hero-gradient text-white py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1 className="display-4 fw-bold mb-4">
                                    La mejor tecnología a tu alcance
                                </h1>
                                <p className="lead mb-4">
                                    Encuentra computadoras, laptops, componentes y accesorios de las mejores marcas
                                </p>
                                <a href="#/products" className="btn btn-light btn-lg">
                                    Ver Productos <i className="fas fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500" 
                                     alt="Technology" className="img-fluid rounded shadow" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Categorías Principales</h2>
                        <div className="row">
                            {categories.map(category => (
                                <CategoryCard key={category.id} category={category} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-5">Productos Destacados</h2>
                        <div className="row">
                            {featuredProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={onAddToCart} 
                                />
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <a href="#/products" className="btn btn-primary-custom btn-lg">
                                Ver Todos los Productos
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
    }
}
