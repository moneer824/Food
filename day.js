async function dayReceipe() {
   
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

    let data = await res.json()
    console.log(data.meals)
    receipe(data.meals)
}

dayReceipe()


let parent = document.getElementById('parent')

function receipe(item) {
    console.log(item)
    item.forEach(({ strArea, strMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20, strInstructions, strMealThumb, strYoutube }) => {

        console.log(strArea, strIngredient1)
        let div = document.createElement('div')
        let div_measure_ingr = document.createElement('div')
        let div_ingr = document.createElement('div')
        let div_measure = document.createElement('div')
        let div_img = document.createElement('div')
        let div_title = document.createElement('div')
        let div_video = document.createElement('div')
        let div_instruction = document.createElement('div')
        let div_inf = document.createElement('div')
        div_video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${strYoutube.substr(32)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        let area = document.createElement('p')
        area.innerText = strArea

        let name = document.createElement('p')
        name.innerText = strMeal

        let img = document.createElement('img')
        img.src = strMealThumb

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

        let Measure1 = document.createElement('p')
        Measure1.innerText = strMeasure1

        let Measure2 = document.createElement('p')
        Measure2.innerText = strMeasure2

        let Measure3 = document.createElement('p')
        Measure3.innerText = strMeasure3

        let Measure4 = document.createElement('p')
        Measure4.innerText = strMeasure4

        let Measure5 = document.createElement('p')
        Measure5.innerText = strMeasure5

        let Measure6 = document.createElement('p')
        Measure6.innerText = strMeasure6

        let Measure7 = document.createElement('p')
        Measure7.innerText = strMeasure7

        let Measure8 = document.createElement('p')
        Measure8.innerText = strMeasure8

        let Measure9 = document.createElement('p')
        Measure9.innerText = strMeasure9

        let Measure10 = document.createElement('p')
        Measure10.innerText = strMeasure10

        let Measure11 = document.createElement('p')
        Measure11.innerText = strMeasure11

        let Measure12 = document.createElement('p')
        Measure12.innerText = strMeasure12

        let Measure13 = document.createElement('p')
        Measure13.innerText = strMeasure13

        let Measure14 = document.createElement('p')
        Measure14.innerText = strMeasure14

        let Measure15 = document.createElement('p')
        Measure15.innerText = strMeasure15

        let Measure16 = document.createElement('p')
        Measure16.innerText = strMeasure16

        let Measure17 = document.createElement('p')
        Measure17.innerText = strMeasure17

        let Measure18 = document.createElement('p')
        Measure18.innerText = strMeasure18

        let Measure19 = document.createElement('p')
        Measure19.innerText = strMeasure19

        let Measure20 = document.createElement('p')
        Measure20.innerText = strMeasure20

        let instruction = document.createElement('p')
        instruction.innerText = strInstructions
        console.log(instruction)
        div_title.append(name, area)
        div_img.append(img)
        div_instruction.append(instruction)
        div_ingr.append(ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20)

        div_measure.append(Measure1, Measure2, Measure3, Measure4, Measure5, Measure6, Measure7, Measure8, Measure9, Measure10, Measure11, Measure12, Measure13, Measure14, Measure15, Measure16, Measure17, Measure18, Measure19, Measure20)
        div_measure_ingr.append(div_ingr, div_measure)
        div_inf.append(div_img, div_video)
        div.append(div_inf,div_measure_ingr)
        parent.append(div_title, div, div_instruction)

    });
}


async function showReceipe() {
    let inp = document.getElementById('inp').value
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)

    let data = await res.json()
    localStorage.setItem('receipe', JSON.stringify(data.meals))
    console.log(data.meals)
    window.location.href = "search.html"
}
