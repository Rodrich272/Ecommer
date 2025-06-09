function Header({ cartItems, toggleCart }) {
    try {
        const [searchTerm, setSearchTerm] = React.useState('');

        const handleSearch = (e) => {
            e.preventDefault();
            if (searchTerm.trim()) {
                window.location.hash = `#/products?search=${encodeURIComponent(searchTerm)}`;
            }
        };

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" data-name="header" data-file="components/Header.js">
                <div className="container">
                    <a className="navbar-brand text-primary" href="#/">
                        <i className="fas fa-microchip me-2"></i>
                        TechStore
                    </a>
                    
                    <div className="d-flex align-items-center flex-grow-1 mx-4">
                        <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
                            <input 
                                className="form-control search-focus me-2" 
                                type="search" 
                                placeholder="Buscar productos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-outline-primary" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="d-flex align-items-center">
                        <button 
                            className="btn btn-outline-light me-3 position-relative"
                            onClick={toggleCart}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            {cartItems.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                        
                        <div className="dropdown">
                            <button className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fas fa-user me-1"></i>
                                Cuenta
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#/login">Iniciar Sesión</a></li>
                                <li><a className="dropdown-item" href="#/register">Registrarse</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
