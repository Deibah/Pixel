let field = document.querySelector('.field')
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let white = document.querySelector('.white')
let black = document.querySelector('.black')
let ieraser = document.querySelector('.ieraser')
let clearAll = document.querySelector('.clearAll')
let is_clicked = false
let dataColor = 'black'
const colors = [
    'red',
    'yellow',
    'green',
    'white',
    'black',
    'grey',
    '',
]
function getResult(cookies){
    for(const cookie of cookies){
        const [name, value] = cookie.split('=')
        if(name==="result"){
            return value
        }
    }
    return'6'.repeat(450)
}


const colorsFromCookie = getResult(document.cookie.split('; '))
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    field.appendChild(cell)
    cell.style.backgroundColor = colors[+colorsFromCookie[i]]
} 
let cells = document.querySelectorAll('.cell')
setInterval(function(){
    
    let result = ''
    for(const cell of cells){
        let color = cell.style.backgroundColor
        let index = colors.indexOf(color)
        result += index
    }
    document.cookie = `result=${result}; max-age=1000000`
},10000)
document.addEventListener("mousedown",function(){
    is_clicked = true
})
document.addEventListener("mouseup",function(){
    is_clicked = false
})
field.addEventListener('mousemove',function(e){
    if(e.target.classList.contains("cell") && is_clicked){
        e.target.style.backgroundColor = dataColor
    }    
})
field.addEventListener('click',function(e){
    e.target.style.backgroundColor = dataColor
})
red.addEventListener("click",function(){
    dataColor = "red"
})
green.addEventListener("click",function(){
    dataColor = "green"
})
yellow.addEventListener("click",function(){
    dataColor = "yellow"
})
white.addEventListener("click",function(){
    dataColor = "white"
})
black.addEventListener("click",function(){
    dataColor = "black"
})
ieraser.addEventListener("click",function(){
    dataColor = "grey"
})
clearAll.addEventListener("click",function(){
    dataColor = "grey"
    for(const cell of cells){
        cell.style.backgroundColor = dataColor
    }
})