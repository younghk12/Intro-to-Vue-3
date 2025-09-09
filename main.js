const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                {id: 0, size: 's'},
                {id: 1, size: 'm'},
                {id: 2, size: 'l'},
                {id: 3, size: 'xl'},
            ]
        }
    }
})
