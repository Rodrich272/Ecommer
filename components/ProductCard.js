function ProductCard({ product, onAddToCart }) {
    try {
        const discount = product.originalPrice ? 
            Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

        return (
            <div className="col-md-6 col-lg-4 mb-4" data-name="product-card" data-file="components/ProductCard.js">
                <div className="card h-100 product-card border-0 shadow-sm">
                    <div className="position-relative">
                        <img 
                            src={product.image} 
                            className="card-img-top" 
                            alt={product.name}
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        {discount > 0 && (
                            <span className="position-absolute top-0 end-0 m-2 discount-badge">
                                -{discount}%
                            </span>
                        )}
                    </div>
                    
                    <div className="card-body d-flex flex-column">
                        <h6 className="card-title text-truncate">{product.name}</h6>
                        <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                        
                        <div className="mt-auto">
                            <div className="d-flex align-items-center mb-2">
                                <span className="price-tag me-2">${product.price.toLocaleString()}</span>
                                {product.originalPrice && (
                                    <small className="text-muted text-decoration-line-through">
                                        ${product.originalPrice.toLocaleString()}
                                    </small>
                                )}
                            </div>
                            
                            <div className="d-flex gap-2">
                                <button 
                                    className="btn btn-primary-custom btn-sm flex-grow-1"
                                    onClick={() => onAddToCart(product)}
                                >
                                    <i className="fas fa-cart-plus me-1"></i>
                                    Agregar
                                </button>
                                <a 
                                    href={`#/product/${product.id}`}
                                    className="btn btn-outline-secondary btn-sm"
                                >
                                    <i className="fas fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
