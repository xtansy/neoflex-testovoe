interface Headphones {
    wired: Headphone[];
    wireless: Headphone[];
}

interface Headphone {
    id: number;
    img: string;
    title: string;
    price: number;
    rate: number
}

interface CartItem extends Headphone {
    count: number;
}