function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
    try {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (!isOpen) return null;

        return (
            <div className="position-fixed top-0 end-0 h-100 bg-white shadow-lg" 
                 style={{ width: '400px', zIndex: 1050 }} 
                 data-name="cart" data-file="components/Cart.js">
                
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h5 className="mb-0">Carrito de Compras</h5>
                    <button className="btn-close" onClick={onClose}></button>
                </div>

                <div className="p-3" style={{ height: 'calc(100% - 140px)', overflowY: 'auto' }}>
                    {cartItems.length === 0 ? (
                        <div className="text-center text-muted">
                            <i className="fas fa-shopping-cart fa-3x mb-3"></i>
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                                <img src={item.image} alt={item.name} 
                                     className="rounded me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                                
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 text-truncate">{item.name}</h6>
                                    <p className="mb-1 text-primary fw-bold">${item.price.toLocaleString()}</p>
                                    
                                    <div className="d-flex align-items-center">
                                        <button 
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button 
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                        <button 
                                            className="btn btn-sm btn-outline-danger ms-2"
                                            onClick={() => onRemoveItem(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-3 border-top">
                        <div className="d-flex justify-content-between mb-3">
                            <strong>Total: ${total.toLocaleString()}</strong>
                        </div>
                        <button className="btn btn-primary-custom w-100">
                            <i className="fas fa-credit-card me-2"></i>
                            Proceder al Pago
                        </button>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
