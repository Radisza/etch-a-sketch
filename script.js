const BOARD_SIZE = 960;
const DEFAULT_PIXELS_PER_ROW = 30;

function set_square_size(element, size) {
    element.style.width = size + 'px';
    element.style.height = size + 'px';
}

function create_new_board(max_board_size, pixels_per_row) {
    let pixel_size = Math.floor(max_board_size / pixels_per_row);
    let new_board_size = pixels_per_row*pixel_size;
    
    let board = document.querySelector('.board');
    board.innerHTML = '';
    set_square_size(board, new_board_size);

    for (let i = 0; i < pixels_per_row*pixels_per_row; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        set_square_size(pixel, pixel_size);
        set_hover_effect(pixel);

        board.appendChild(pixel);
    }
}

function get_random_int(max) {
    return Math.floor(Math.random(max) * max);
}

function set_background_color(element) {
        let random = () => { return get_random_int(255); };
        let random_color = `rgb(${random()}, ${random()}, ${random()})`;
        element.style.backgroundColor=random_color;
}

function unset_background_color(element) {
    element.style.backgroundColor='';
}

function set_hover_effect(pixel) {
    pixel.addEventListener('mouseover', (event) => set_background_color(event.target));
    pixel.addEventListener('mouseout', (event) => unset_background_color(event.target));
}

let new_board_btn = document.querySelector(".new_board");
new_board_btn.addEventListener('click', () => {
    let user_input = prompt("Give number of pixels per row between 1-100.");
    if (user_input == undefined) {
        alert(`Undefined input. Expected integer between 1-100.`);
        return;
    }

    let pixels_per_row = parseInt(user_input);
    if (isNaN(pixels_per_row) || pixels_per_row < 1 || pixels_per_row > 100) {
        alert(`Invalid input. Expected integer between 1-100.`);
        return;
    }

    create_new_board(BOARD_SIZE, pixels_per_row);
})


create_new_board(BOARD_SIZE, DEFAULT_PIXELS_PER_ROW);