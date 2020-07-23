let goods_count = 0
const goods_price = Number(document.querySelector('.goods_price').textContent.split(' ')[0].split(',')[0])  // Превращение цены с сайта в число без копеек и ₽

let addGoodsCount = () => {
    goods_count = goods_count + 1
    document.querySelector('.goods_count').value = goods_count
    changeGoodsPrice(goods_count, '+')
};

let diminishGoodsCount = () => {
    if (goods_count != 0){
        goods_count = goods_count - 1
        document.querySelector('.goods_count').value = goods_count;
    };
    changeGoodsPrice(goods_count, '-');
};

let changeGoodsPrice = (x=1, action) => {
    if (x != 0){
        if (action == '+'){
            new_goods_price = goods_price * x;
        } else if (action == '-'){
            new_goods_price = new_goods_price - goods_price;
        };
  
        document.querySelector('.goods_price').textContent = `${new_goods_price},00 ₽`;
    };
};

