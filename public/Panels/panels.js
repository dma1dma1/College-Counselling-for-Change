const flipped = () => {
    let cards = document.getElementsByClassName("flip-card");
    for (let card of cards) {
        card.addEventListener("click", function() {
            card.classList.toggle("flipped");
        })
    }
}

flipped();