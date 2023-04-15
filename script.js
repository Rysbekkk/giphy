const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const limit = '&limit='
const rest = '&q='
// 'https://api.giphy.com/v1/gifs/search?api_key=sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP&limit=5&q=kpop'


const output = document.querySelector('.output')


const searchGiphy = async (title = 'shrek', num = 5) => {
    console.log(title)
    const url = `${API}${KEY}${limit}${num}${rest}${title}`
    const request = await fetch(url)
    const response = await request.json()
    renderGiphy(response.data)
}
searchGiphy()



const form = document.querySelector('form')
const input = document.querySelector('.search')
const button = document.querySelector('button')
const number = document.querySelector('.number')
const range = document.querySelector('.range')


const handleSearch = () =>{



form.addEventListener('submit', (e) =>{
    e.preventDefault()
    searchGiphy(input.value, number.value)
})
}
handleSearch()

const handleRange = () => {

    const updateTextInput = (valueFromRange) => {
        number.value = valueFromRange
    }

    range.addEventListener('change', () => {
        updateTextInput(range.value)
    })
}
handleRange()


const renderGiphy = (data) => {
    output.innerHTML=''
    console.log(data)
    data.forEach(el => {
        const iframe = document.createElement('iframe')
        iframe.src = el.embed_url
        
        
        output.append(iframe)
    })
}
const buttonWrap = document.querySelector('.wrap')
const category = ['night fury', 'nu pogodi', 'tom&jerry', 'king lion']
category.forEach(el => {
    const button = document.createElement('button')
    

    button.textContent = el


        buttonWrap.append(button)
        
        button.addEventListener('click', ()=>{
            searchGiphy(el)
        })
})
