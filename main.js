let menu = document.querySelector('.menu')
let row = document.querySelector('.row')

const getProducts = (category) => {
    fetch(`https://fakestoreapi.com/products/${category === 'all' ? '' : 'category/' + category}`)
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                row.innerHTML += `
                    <div class ="card">
                    <img class = "card__img" src = "${item.image}" alt = ""/>
                    <h2 class = "card__title">${item.title}</h2>
                    <p class ="card__subtitle">${item.description}</p>
                    <p class ="card__category">Категория: ${item.category}</p>
                    <p class ="card__price">цена: ${item.price}</p>
                    <p class ="card__rating">Рейтинг: ${item.rating.rate}</p>
                    </div>
                `
            })
        })
}

getProducts('all')


const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())
    .then((res) => {
        res.forEach((item) => {
           menu.innerHTML += `
        <li class = "menu-item">${item}</li>
        `
    })
    let menuItem = document.querySelectorAll('.menu-item')
    console.log(menuItem);

    Array.from(menuItem).forEach((item) => {
       item.addEventListener('click', () => {
        row.innerHTML = ''
        getProducts(item.textContent)
       
       })
       
    })
})
}
getCategories()

