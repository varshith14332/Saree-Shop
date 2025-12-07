export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    category: string;
    fabric: string;
    color: string;
    images: string[];
    description: string;
    tags: string[];
    inStock: boolean;
    isNew: boolean;
    isFeatured: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    userDetails: UserDetails;
    date: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
}
