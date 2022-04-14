const colorHexa = document.querySelector('#colorHexa')
const body = document.querySelector('body')
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function altColor(){
 
    let hex = '#'
    for (let i = 0; i < 6; i++){
        const colorAlterate = Math.floor(Math.random()*hexValues.length)
        hex += hexValues[colorAlterate]
    }

    colorHexa.textContent = hex
    body.style.backgroundColor = hex
    
}
altColor();
