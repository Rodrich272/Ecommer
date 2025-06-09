function App() {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [isCartOpen, setIsCartOpen] = React.useState(false);
        const [currentPage, setCurrentPage] = React.useState('home');

        React.useEffect(() => {
            const unsubscribe = cartStore.subscribe(setCartItems);
            setCartItems(cartStore.getItems());

            const handleHashChange = () => {
                const hash = window.location.hash.slice(1) || '/';
                const path = hash.split('?')[0];
                
                if (path === '/' || path === '') {
                    setCurrentPage('home');
                } else if (path === '/products') {
                    setCurrentPage('products');
                } else if (path.startsWith('/product/')) {
                    setCurrentPage('product-detail');
                } else {
                    setCurrentPage('home');
                }
            };

            handleHashChange();
            window.addEventListener('hashchange', handleHashChange);

            return () => {
                unsubscribe();
                window.removeEventListener('hashchange', handleHashChange);
            };
        }, []);

        const handleAddToCart = (product) => {
            cartStore.addItem(product);
        };

        const handleUpdateQuantity = (productId, quantity) => {
            cartStore.updateQuantity(productId, quantity);
        };

        const handleRemoveItem = (productId) => {
            cartStore.removeItem(productId);
        };

        const toggleCart = () => {
            setIsCartOpen(!isCartOpen);
        };

        const renderPage = () => {
            switch (currentPage) {
                case 'home':
                    return React.createElement(Home, { onAddToCart: handleAddToCart });
                case 'products':
                    return React.createElement(Products, { onAddToCart: handleAddToCart });
                case 'product-detail':
                    return React.createElement(ProductDetail, { onAddToCart: handleAddToCart });
                default:
                    return React.createElement(Home, { onAddToCart: handleAddToCart });
            }
        };

        return React.createElement(
            'div',
            { className: 'min-h-screen bg-white' },
            React.createElement(Header, {
                cartItems: cartItems,
                toggleCart: toggleCart
            }),
            renderPage(),
            React.createElement(Cart, {
                isOpen: isCartOpen,
                onClose: () => setIsCartOpen(false),
                cartItems: cartItems,
                onUpdateQuantity: handleUpdateQuantity,
                onRemoveItem: handleRemoveItem
            }),
            isCartOpen && React.createElement('div', {
                className: 'position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50',
                style: { zIndex: 1040 },
                onClick: () => setIsCartOpen(false)
            })
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
