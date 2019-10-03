(function () {
    let playerX = 'X'
    let playerO = 'O'

    let currentPlayer = playerX;
    let playerXSelections = [];
    let playerOSelections = [];


    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]

    ];

    // get all td elements from the DOM and store in cellElementArray
    const cellElementArray = document.querySelectorAll('td');
    // write for loop to iterate over cellElementArray
    for (let i = 0; i < cellElementArray.length; i++) {
        // set cellElementArray[i] to currentCell variable
        let currentCell = cellElementArray[i]
        // add an event listener to the currentCell
        currentCell.addEventListener('click', function (event) {
            const clickedCellElement = event.target;
            if (clickedCellElement.innerHTML === "") {
                // console log the id of the cell being clicked on
                // console.log(event.target)
                clickedCellElement.innerHTML = currentPlayer;
                if (currentPlayer === playerX) {
                    playerXSelections.push(parseInt(clickedCellElement.id))
                    console.log("playerXSelections:" + playerXSelections)
                    checkForWin(playerXSelections, playerX)
                }
                else {
                    playerOSelections.push(parseInt(clickedCellElement.id))
                    console.log("playerOSelections:" + playerOSelections)
                    checkForWin(playerOSelections, playerO)
                }
                switchPlayers();
            }
    });
    }

    function checkForWin(playerSelections, currentPlayer) {
        for (let i = 0; i < winningCombinations.length; i++) {
            let matches = 0;
            for (let j = 0; j < playerSelections.length; j++) {
                if (winningCombinations[i].includes(playerSelections[j]))
                    matches++;
            }
            if (matches === 3) {
                alert(currentPlayer + " wins")
                return true;
            }
        }
        return false;
    }
    // //for every combination in winningCombination
    //     set matches to 0
    //     for every number in the current combination
    //         if the playerSelections array contains the current number
    //             increment matches by one
    //         if matches is equal to 3
    //             return true
    // we got through all combinations, so return false
    function switchPlayers() {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        }
        else if (currentPlayer === playerO) {
            currentPlayer = playerX
        }
    }
})();