const BOARD_SIZE = 960;
const DEFAULT_PIXELS_PER_ROW = 30;

function set_square_size(element, size) {
    element.style.width = size + 'px';
    element.style.height = size + 'px';
}

function new_board(max_board_size, pixels_per_row) {
    let pixel_size = Math.floor(max_board_size / pixels_per_row);
    let new_board_size = pixels_per_row*pixel_size;
    
    let board = document.querySelector('.board');
    board.innerHTML = '';
    set_square_size(board, new_board_size);

    for (let i = 0; i < pixels_per_row*pixels_per_row; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        set_square_size(pixel, pixel_size);

        pixel.textContent = i;

        board.appendChild(pixel);
    }
}

new_board(BOARD_SIZE, DEFAULT_PIXELS_PER_ROW);

let new_board_btn = document.querySelector(".new_board");
new_board_btn.addEventListener('click', () => {
    let user_input = prompt("Give number of pixels per row between 1-100.");
    if (user_input == undefined) {
        alert(`Undefined input. Expected integer between 1-100.`);
        return;
    }

    let pixels_per_row = parseInt(user_input);
    if (isNaN(pixels_per_row)) {
        alert(`Invalid input. Expected integer between 1-100.`);
        return;
    }

    if (pixels_per_row < 1 || pixels_per_row > 100) {
        alert(`Wrong number. Expected integer between 1-100.`);
        return;
    }

    new_board(BOARD_SIZE, pixels_per_row);
})
