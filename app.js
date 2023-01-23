document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const width = 8;
    const squares = [];

    //candy colors

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]

    //create the game board

    function createBoard() {

        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div')
            square.setAttribute('draggable', true)
            square.setAttribute('id', i)
            let randomColor = Math.floor(Math.random() * candyColors.length)
            square.style.backgroundColor = candyColors[randomColor]
            grid.appendChild(square)
            squares.push(square)
        }

    }

    createBoard()

    //drag the candies

    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        //note: this means the div element
        squareIdBeignDragged = parseInt(this.id)
        console.log(colorBeingDragged)
        console.log(this.id, 'dragstart')
    }

    function dragOver(e) {
        e.preventDefault()
        console.log(this.id, 'dragover')
    }

    function dragEnter(e) {
        e.preventDefault()
        console.log(this.id, 'dragenter')
    }

    function dragLeave() {
        console.log(this.id, 'dragleave')
    }

    function dragDrop() {
        console.log(this.id, 'dragdrop')
        colorBeingReplaced = this.style.backgroundColor
        colorIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeignDragged].style.backgroundColor = colorBeingReplaced

    }

    function dragEnd() {
        console.log(this.id, 'dragend')
        //valid moves

        let validMoves = [
            squareIdBeingDragged - 1,
            squareIdBeingDragged - width,
            squareIdBeingDragged +1,
            squareIdBeingDragged + width
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced)
    }


});