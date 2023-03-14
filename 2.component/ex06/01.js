import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json','utf-8'))
}
console.log(state);

const updateOrderProducts = state.order.products;
updateOrderProducts.push({
    no:'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});

console.log(state.order.products,updateOrderProducts,updateOrderProducts===state.order.products)
console.log('============================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json','utf-8'))
}

const updateOrderProducts2 = state.order.products.concat({
    no:'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});

console.log(state.order.products,updateOrderProducts,updateOrderProducts===state.order.products)
