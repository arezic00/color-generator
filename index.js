const results = document.getElementsByClassName('result')
const form = document.getElementById('form')
let colors = ['#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3']

function renderColors() {
    for (let i in colors) {
        results[i].firstElementChild.style.backgroundColor = colors[i]
        results[i].lastElementChild.innerHTML = colors[i]
    }
}

renderColors()

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(form)
    const seedHexClean = formData.get('seedColor').substring(1)
    const mode = formData.get('colorSchemeMode')

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedHexClean}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            colors = data.colors.map(it => it.hex.value)
            renderColors()
        })
})
