async function getDeck() {
    // fetch the data
    const response = await fetch('deck.json');
    const data = await response.json();
    console.log(data);
    const deckData = data.deck;

    // create Books with Book class
    for (let i = 0; i < deckData.length; i++) {
        const b = new card(deckData[i].name, deckData[i].attack, deckData[i].defense, deckData[i].image); // shefl1 
        b.updateDeck();
    }
}

getDeck();

class card {
    constructor(name, attack, defense, image) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.image = image;

        // create a .book element to insert these new elements
        this.cardElement = document.createElement('div');
        this.cardElement.classList.add('deck');

        // create the elements for the book data
        this.nameElement = document.createElement('p');
        this.attackElement = document.createElement('p');
        this.defenseElement = document.createElement('p');
        this.imageElement = document.createElement('img');

        // appending the new elements into the .book element
        this.cardElement.appendChild(this.imageElement);
        this.cardElement.appendChild(this.nameElement);
        this.cardElement.appendChild(this.attackElement);
        this.cardElement.appendChild(this.defenseElement);
        this.backImage = document.createElement('img');

        this.backImage.src = "images/backcard.webp";
        this.backImage.classList.add("back");

        this.cardElement.addEventListener('click', () => this.showInfo());

        // append .book element into container element
        document.getElementById("card_container").appendChild(this.cardElement);
    }

    updateDeck() {
        // put the book data into the elements
        this.imageElement.src = this.image;
        this.nameElement.innerText = "Name: " + this.name;
        this.attackElement.innerText = "Attack: " + this.attack;
        this.defenseElement.innerText = "Defense: " + this.defense;
    }

    showInfo() {
    this.nameElement.style.visibility =
        this.nameElement.style.visibility === "hidden" ? "visible" : "hidden";

    this.attackElement.style.visibility =
        this.attackElement.style.visibility === "hidden" ? "visible" : "hidden";

    this.defenseElement.style.visibility =
        this.defenseElement.style.visibility === "hidden" ? "visible" : "hidden";
}

    borrow() {
        let newNumCopies = this.numCopies - 1;
        if (newNumCopies < 1) {
            this.bookElement.classList.add('disabled');
            // this.bookElement.removeEventListener('click', this.onClick);
            this.numCopies = 0;
        } else {
            this.numCopies = newNumCopies;
        }
        this.updateBook();
    }
}
