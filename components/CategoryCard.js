function CategoryCard({ category }) {
    try {
        return (
            <div className="col-md-6 col-lg-3 mb-4" data-name="category-card" data-file="components/CategoryCard.js">
                <a href={`#/products?category=${category.slug}`} className="text-decoration-none">
                    <div className="card category-hover border-0 shadow-sm bg-light">
                        <div className="card-body text-center p-4">
                            <div className="mb-3">
                                <i className={`${category.icon} fa-3x text-primary`}></i>
                            </div>
                            <h5 className="card-title text-dark">{category.name}</h5>
                            <p className="card-text text-muted small">{category.count} productos</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    } catch (error) {
        console.error('CategoryCard component error:', error);
        reportError(error);
    }
}
