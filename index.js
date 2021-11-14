// console.log(fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`))

async function showReceipe() {
    // let inp = document.getElementById('inp').value
    // let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)

    // let data = await res.json()
    // localStorage.setItem('receipe', JSON.stringify(data.meals))
    // console.log(data.meals)
    window.location.href = "search.html"
}

let parent = document.getElementById('pop')


async function debounce(inp) {
    // let inp = document.getElementById('inp').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)

    let data = await res.json()
    localStorage.setItem('receipe', JSON.stringify(data.meals))

    // console.log(data.meals)

    append_food(data.meals)
}


async function main() {
    parent.style.display = 'block'
    let inp = document.getElementById('inp').value
    debounce(inp)
}

function append_food(food) {
    parent.innerHTML = null

    food.forEach(meals => {
        let div = document.createElement('div')
        let name = document.createElement('p')
        name.innerText = meals.strMeal
        div.append(name)

        name.onclick = function () {
            console.log(meals.strMeal)
            localStorage.setItem('item', JSON.stringify([meals]))
            window.location.href = 'receipe.html'
        }
        parent.append(div)

    });
}