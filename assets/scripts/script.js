console.log('Hello world')

var swiper = new Swiper(".slider-banner", {
    navigation: {
        nextEl: ".banner .arrow_right",
        prevEl: ".banner .arrow_left",
    },
});

const toggleTabProducts = () => {

    let tabs = document.querySelectorAll('.products__tabs .tab-product');
    let grids = document.querySelectorAll('.products__list .products__grid');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {

            tabs.forEach((tab_2) => {
                tab_2.classList.remove('active');
            })
            grids.forEach((grid) => {
                grid.classList.remove('active');
            })

            tab.classList.add('active');
            grids[index].classList.add('active');

        })
    })

}

toggleTabProducts();
