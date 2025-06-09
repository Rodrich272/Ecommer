function ProductDetail({ onAddToCart }) {
    try {
        const [product, setProduct] = React.useState(null);
        const [quantity, setQuantity] = React.useState(1);
        const [selectedImage, setSelectedImage] = React.useState(0);

        React.useEffect(() => {
            const productId = window.location.hash.split('/')[2];
            const foundProduct = mockProducts.find(p => p.id === parseInt(productId));
            if (foundProduct) {
                setProduct({
                    ...foundProduct,
                    images: [foundProduct.image, foundProduct.image, foundProduct.image]
                });
            }
        }, []);

        if (!product) {
            return (
                <div className="container py-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            );
        }

        const handleAddToCart = () => {
            for (let i = 0; i < quantity; i++) {
                onAddToCart(product);
            }
        };

        return (
            <div className="container py-4" data-name="product-detail" data-file="pages/ProductDetail.js">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#/">Inicio</a></li>
                        <li className="breadcrumb-item"><a href="#/products">Productos</a></li>
                        <li className="breadcrumb-item active">{product.name}</li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-4">
                            <img 
                                src={product.images[selectedImage]} 
                                alt={product.name}
                                className="img-fluid rounded shadow"
                            />
                        </div>
                        <div className="d-flex gap-2">
                            {product.images.map((img, idx) => (
                                <img 
                                    key={idx}
                                    src={img} 
                                    alt={`${product.name} ${idx + 1}`}
                                    className={`img-thumbnail cursor-pointer ${selectedImage === idx ? 'border-primary' : ''}`}
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    onClick={() => setSelectedImage(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h1 className="mb-3">{product.name}</h1>
                        <p className="text-muted mb-4">{product.description}</p>

                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <span className="h3 text-primary me-3">${product.price.toLocaleString()}</span>
                                {product.originalPrice && (
                                    <span className="text-muted text-decoration-line-through">
                                        ${product.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>
                            <div className="text-success">
                                <i className="fas fa-check-circle me-1"></i>
                                Disponible en stock
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Cantidad:</label>
                            <div className="d-flex align-items-center">
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </button>
                                <input 
                                    type="number" 
                                    className="form-control mx-2 text-center" 
                                    style={{ width: '80px' }}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                />
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button 
                                className="btn btn-primary-custom btn-lg"
                                onClick={handleAddToCart}
                            >
                                <i className="fas fa-cart-plus me-2"></i>
                                Agregar al Carrito
                            </button>
                            <button className="btn btn-outline-primary btn-lg">
                                <i className="fas fa-heart me-2"></i>
                                Agregar a Favoritos
                            </button>
                        </div>

                        <div className="mt-4">
                            <h5>Especificaciones:</h5>
                            <ul className="list-unstyled">
                                <li><strong>Marca:</strong> {product.brand || 'N/A'}</li>
                                <li><strong>Modelo:</strong> {product.model || 'N/A'}</li>
                                <li><strong>Garantía:</strong> 1 año</li>
                                <li><strong>Envío:</strong> Gratis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductDetail component error:', error);
        reportError(error);
    }
}
