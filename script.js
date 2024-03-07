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

    console.log(new_board_size);
    console.log(pixel_size);
    
    for (let i = 0; i < pixels_per_row*pixels_per_row; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        set_square_size(pixel, pixel_size);

        pixel.textContent = i;

        board.appendChild(pixel);
    }
}

new_board(BOARD_SIZE, DEFAULT_PIXELS_PER_ROW);

