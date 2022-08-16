
var ProductName = document.getElementById('ProductName');
var ProductCategory = document.getElementById('ProductCategory');
var ProductPrice = document.getElementById('ProductPrice');
var ProductDescription = document.getElementById('ProductDescription');

var products = []
var data
if (localStorage.getItem('products') == null) {
    products = []

} else {
    products = JSON.parse(localStorage.getItem('products'))
    display()
}


function getData() {
    product = {
        name: ProductName.value,
        category: ProductCategory.value,
        price: ProductPrice.value,
        desc: ProductDescription.value
    }
    var btn = document.getElementById('btn').innerHTML
    if (btn == 'Update') {
        products[data] = product;
        document.getElementById('btn').innerHTML = 'add Product'
    } else {
        products.push(product);
    }

    display()
    localStorage.setItem('products', JSON.stringify(products));
    clear()
}


function display() {
    var box = ``
    for (var i = 0; i < products.length; i++) {
        box += `
        <tr>
        <td>${i + 1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].category}</td>
        <td>${products[i].price}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
        <td><button  onclick="Update(${i})"  class="btn btn-info">Update</button></td>
        
        </tr>`

    }
    document.getElementById('demo').innerHTML = box;


}


function Delete(index) {
    products.splice(index, 1)
    display()

    localStorage.setItem('products', JSON.stringify(products))
}

function Update(index) {
    data = index
    ProductName.value = products[index].name
    ProductDescription.value = products[index].desc
    ProductPrice.value = products[index].price
    ProductCategory.value = products[index].category

    document.getElementById('btn').innerHTML = 'Update'

}

function clear() {
    ProductName.value = '';
    ProductCategory.value = ''
    ProductDescription.value = ''
    ProductPrice.value = ''
}

function search(index) {
    searchInput = index
    var box2 = ''
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
            box2 = `
        <tr>
        <td>${i + 1}</td>
        <td>${products[i].name.replace(searchInput, '<span>' + searchInput + '</span>')}</td>
        <td>${products[i].category}</td>
        <td>${products[i].price}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
        <td><button  onclick="Update(${i})"  class="btn btn-info">Update</button></td>
        
        </tr>`

        }
    }
    document.getElementById('demo').innerHTML = box2;

}



var pattern = /^[A-Z]{1}[a-z]{2,}$/

function validateName(data) {

    if (pattern.test(data) == true) {

        document.getElementById('alert').style.display = "none"
        


    } else {
        document.getElementById('alert').style.display = "block"
     

    }
}