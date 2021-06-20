console.log ('hello cybersoft');


var arrProduct = [
    {id: 1,name: 'iphone X', price: 1000, img: 'https://unsplash.com/photos/pduutGbL2-M'},
    {id: 2,name: 'iphone Xs', price: 2000, img: 'https://unsplash.com/photos/pduutGbL2-M'},
    {id: 3,name: 'iphone Xs Max', price: 3000, img: 'https://unsplash.com/photos/pduutGbL2-M'}

]

function renderproduct () {
    console.log('mình mới vừa viết hàm này devA');
    var content = '';
    for (var i=0; i < arrProduct.length; i++) {
        let product = arrProduct[i];
        content += `
            <div class="col-4 mt-2">
                <div class="card">
                    <img src="${product.img}" />
                    <div class="card-body">
                        <p>${product.price}</p>
                        <button>Mua Hàng</button>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector('#arrProduct').innerHTML = content;
}
renderproduct();
