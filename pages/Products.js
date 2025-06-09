function Products({ onAddToCart }) {
    try {
        const [products, setProducts] = React.useState([]);
        const [filteredProducts, setFilteredProducts] = React.useState([]);
        const [selectedCategory, setSelectedCategory] = React.useState('');
        const [priceRange, setPriceRange] = React.useState([0, 100000]);
        const [searchTerm, setSearchTerm] = React.useState('');

        React.useEffect(() => {
            setProducts(mockProducts);
            setFilteredProducts(mockProducts);
            
            // Get URL parameters
            const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
            const category = urlParams.get('category');
            const search = urlParams.get('search');
            
            if (category) setSelectedCategory(category);
            if (search) setSearchTerm(search);
        }, []);

        React.useEffect(() => {
            let filtered = products;

            if (selectedCategory) {
                filtered = filtered.filter(p => p.category === selectedCategory);
            }

            if (searchTerm) {
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

            setFilteredProducts(filtered);
        }, [products, selectedCategory, priceRange, searchTerm]);

        return (
            <div className="container py-4" data-name="products" data-file="pages/Products.js">
                <div className="row">
                    {/* Filters Sidebar */}
                    <div className="col-lg-3 mb-4">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Filtros</h5>
                            </div>
                            <div className="card-body">
                                {/* Category Filter */}
                                <div className="mb-4">
                                    <h6>Categoría</h6>
                                    <select 
                                        className="form-select"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="">Todas las categorías</option>
                                        {mockCategories.map(cat => (
                                            <option key={cat.id} value={cat.slug}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div className="mb-4">
                                    <h6>Rango de Precio</h6>
                                    <div className="d-flex gap-2">
                                        <input 
                                            type="number" 
                                            className="form-control form-control-sm"
                                            placeholder="Min"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                                        />
                                        <input 
                                            type="number" 
                                            className="form-control form-control-sm"
                                            placeholder="Max"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                                        />
                                    </div>
                                </div>

                                <button 
                                    className="btn btn-outline-secondary w-100"
                                    onClick={() => {
                                        setSelectedCategory('');
                                        setPriceRange([0, 100000]);
                                        setSearchTerm('');
                                    }}
                                >
                                    Limpiar Filtros
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="col-lg-9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4>Productos ({filteredProducts.length})</h4>
                        </div>

                        <div className="row">
                            {filteredProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={onAddToCart} 
                                />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-5">
                                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                                <h5>No se encontraron productos</h5>
                                <p className="text-muted">Intenta ajustar los filtros de búsqueda</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Products component error:', error);
        reportError(error);
    }
}
