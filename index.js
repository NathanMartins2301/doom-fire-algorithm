const firePixelsArray = []
const fireWidth = 2
const fireHeight = 3

function start(){
    createFireDataStructure()
    renderFire()
}

function createFireDataStructure(){
    const numberOfPixels = fireHeight * fireWidth
    for (let i=0; i < numberOfPixels; i++){
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation(){
}

function renderFire(){
    let html = '<table cellpadding=0 cellspacing=0>'

    for(let row = 0; row < fireHeight; row++){
        html += '<tr>'
        for(let collumn = 0; collumn < fireWidth; collumn++){
            const pixelIndex = collumn + (fireWidth * row)
            html += '<td>'
            html += pixelIndex
            html += '</td>'
        }
        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#fireCanvas').innerHTML = html
}



start()