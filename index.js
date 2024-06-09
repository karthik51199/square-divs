const TOT_WIDTH = 960

function trace(evt) {
    console.log(this)
    const color1 = Math.floor(Math.random()*256)
    const color2 = Math.floor(Math.random()*256)
    const color3 = Math.floor(Math.random()*256)
    this.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
}

function newSketch() {
    const n = prompt('Enter size')
    const container = document.querySelector('.container')
    container.innerHTML = ''
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            const myDiv = document.createElement('div')
            myDiv.setAttribute('class', 'cls')
            myDiv.style.width = `${TOT_WIDTH/n}px`
            myDiv.style.height = `${TOT_WIDTH/n}px`
            myDiv.addEventListener('mouseover', trace)
            container.appendChild(myDiv)
        }
    }
}

const resetButton = document.createElement('button')
resetButton.innerText = 'New Sketch Board'
resetButton.addEventListener('click', newSketch)

document.body.prepend(resetButton)

newSketch()