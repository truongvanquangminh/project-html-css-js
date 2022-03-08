
fetch('http://fakestoreapi.com/products')
.then(res=>{
    console.log(res)
    return res.json()
})
.then(data=>{
    var products = document.querySelector('.products');
    products.innerHTML = ``
    data.forEach(item=>{
        var newProduct = document.createElement('div');
        newProduct.classList.add('product');
        newProduct.innerHTML = `
            <img src="${item.image}">
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
        `;
        products.appendChild(newProduct);
    })
})

var searchInput = document.querySelector('.search input');
searchInput.addEventListener('input',(e)=>{
    let txtSearch = e.target.value.trim();
    let listProductDom = document.querySelectorAll('.product');
    listProductDom.forEach(item=>{
        if(item.innerText.includes(txtSearch)){
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
})