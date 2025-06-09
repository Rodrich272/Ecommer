const cartStore = {
    items: [],
    listeners: [],

    addItem(product) {
        try {
            const existingItem = this.items.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({
                    ...product,
                    quantity: 1
                });
            }
            
            this.notifyListeners();
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    },

    updateQuantity(productId, quantity) {
        try {
            if (quantity <= 0) {
                this.removeItem(productId);
                return;
            }
            
            const item = this.items.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                this.notifyListeners();
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    },

    removeItem(productId) {
        try {
            this.items = this.items.filter(item => item.id !== productId);
            this.notifyListeners();
        } catch (error) {
            console.error('Error removing item:', error);
        }
    },

    getItems() {
        return this.items;
    },

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    },

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.items));
    },

    clear() {
        this.items = [];
        this.notifyListeners();
    }
};
