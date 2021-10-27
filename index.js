// console.log(fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`))

async function showReceipe() {
    let inp = document.getElementById('inp').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)

    let data = await res.json()
    localStorage.setItem('receipe', JSON.stringify(data.meals))
    console.log(data.meals)
    window.location.href = "search.html"
}


