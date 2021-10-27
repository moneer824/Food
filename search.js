
let parent = document.getElementById('parent')

let receipe = JSON.parse(localStorage.getItem('receipe'))

function receipeAll() {
    receipe.forEach(products => {

        let div = document.createElement('div')
        let div_img = document.createElement('div')
        let name = document.createElement('p')
        name.innerText = products.strMeal
        let area = document.createElement('p')
        area.innerText = products.strArea
        let img = document.createElement('img')
        img.src = products.strMealThumb
        div.onclick = function () {
            localStorage.setItem('item', JSON.stringify([products]))
            window.location.href = 'receipe.html'
        }
        div_img.append(img, area)
        div.append(div_img, name)

        parent.append(div)

    });
}
receipeAll()
console.log(receipe)

async function showReceipe() {
    let inp = document.getElementById('inp').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)

    let data = await res.json()
    localStorage.setItem('receipe', JSON.stringify(data.meals))
    console.log(data.meals)
    window.location.href = "search.html"
}
