let productContainer = document.querySelector('.filtcontainer');
let search = document.getElementById('search');
let find = productContainer.querySelectorAll('.images');

search.addEventListener('keyup', (event) => {
    let enterValue = event.target.value.trim().toUpperCase();

    for (let count = 0; count < find.length; count++) {
        let productName = find[count].querySelector('p').textContent.trim().toUpperCase();

        if (productName.includes(enterValue)) {
            find[count].style.display = "block";
        } else {
            find[count].style.display = "none";
        }
    }
});
