// var myModal = new bootstrap.Modal(document.getElementById('loginModal'));

// myModal.toggle();

new Splide("#splide2", {
    type: "loop",
    perPage: 1,
    // perMove: 1,
    pagination: false,
    autoWidth: true,
    // rewind: true,
    breakpoints: {
        992: {
            perPage: 1,
            autoWidth: false,
            pagination: true,
        },
    },
}).mount();
