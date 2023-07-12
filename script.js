console.log('hello game this is working.')

const board = document.querySelectorAll("[data-board]");

board.forEach(hole => {
    hole.addEventListener("click", () =>{
        console.log('you clicked my board hooray!')
    })
});
