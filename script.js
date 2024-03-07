function set_square_size(element, size) {
    element.style.width = size + 'px';
    element.style.height = size + 'px';
}


function new_board(max_board_size, pixel_size) {
    console.log("HELLO WORLD");
    let pixels_per_row = Math.floor(max_board_size / pixel_size);
    let new_board_size = pixels_per_row*pixel_size;
    
    let board = document.querySelector('.board');
    board.innerHTML = '';
    set_square_size(board, new_board_size);

    console.log(new_board_size);
    console.log(pixel_size);
    
    for (let i = 0; i < pixels_per_row*pixels_per_row; i++) {
        let pixel = document.createElement('div');
        set_square_size(pixel, pixel_size);
        pixel.style.border = '1px solid lightgrey';
        pixel.style.boxSizing = 'border-box';
        pixel.textContent = i;

        board.appendChild(pixel);
    }
}


new_board(960, 32);