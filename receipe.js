
let parent = document.getElementById('parent')

let item = JSON.parse(localStorage.getItem('item'))

function receipe() {
    item.forEach(({ strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20 }) => {
        console.log(strArea, strIngredient1)
        let div = document.createElement('div')
        let area = document.createElement('p')
        area.innerText = strArea

        let ingredient1 = document.createElement('p')
        ingredient1.innerText = strIngredient1

        let ingredient2 = document.createElement('p')
        ingredient2.innerText = strIngredient2

        let ingredient3 = document.createElement('p')
        ingredient3.innerText = strIngredient3

        let ingredient4 = document.createElement('p')
        ingredient4.innerText = strIngredient4

        let ingredient5 = document.createElement('p')
        ingredient5.innerText = strIngredient5

        let ingredient6 = document.createElement('p')
        ingredient6.innerText = strIngredient6

        let ingredient7 = document.createElement('p')
        ingredient7.innerText = strIngredient7

        let ingredient8 = document.createElement('p')
        ingredient8.innerText = strIngredient8

        let ingredient9 = document.createElement('p')
        ingredient9.innerText = strIngredient9

        let ingredient10 = document.createElement('p')
        ingredient10.innerText = strIngredient10

        let ingredient11 = document.createElement('p')
        ingredient11.innerText = strIngredient11

        let ingredient12 = document.createElement('p')
        ingredient12.innerText = strIngredient12

        let ingredient13 = document.createElement('p')
        ingredient13.innerText = strIngredient13

        let ingredient14 = document.createElement('p')
        ingredient14.innerText = strIngredient14

        let ingredient15 = document.createElement('p')
        ingredient15.innerText = strIngredient15

        let ingredient16 = document.createElement('p')
        ingredient16.innerText = strIngredient16

        let ingredient17 = document.createElement('p')
        ingredient17.innerText = strIngredient17

        let ingredient18 = document.createElement('p')
        ingredient18.innerText = strIngredient18

        let ingredient19 = document.createElement('p')
        ingredient19.innerText = strIngredient19

        let ingredient20 = document.createElement('p')
        ingredient20.innerText = strIngredient20

        div.append(area,ingredient1,ingredient2,ingredient3,ingredient4,ingredient5,ingredient6,ingredient7,ingredient8,ingredient9,ingredient10,ingredient11,ingredient12,ingredient13,ingredient14,ingredient15,ingredient16,ingredient17,ingredient18,ingredient19,ingredient20)

        parent.append(div)

    });
}
receipe()
console.log(receipe)

async function showReceipe() {
    let inp = document.getElementById('inp').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)

    let data = await res.json()
    localStorage.setItem('receipe', JSON.stringify(data.meals))
    console.log(data.meals)
    window.location.href = "search.html"
}
