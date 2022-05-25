const toRemove = document.getElementById('main')
main.remove()

const newHeader = document.createElement('h1')
// <h1></h1>
newHeader.id = 'victory'
// <h1 id="victory"></h1>
newHeader.textContent = 'Winnie is the champion'
document.body.append(newHeader)
