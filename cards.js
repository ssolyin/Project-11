// part 1
const cards = [
    {
        id: 1,
        title: "Card 1",
        description: "Description for Card 1.",
        imageUrl: "https://placehold.co/250x150"
    },
    {
        id: 2,
        title: "Card 2",
        description: "Description for Card 2.",
        imageUrl: "https://placehold.co/250x150"
    },
    {
        id: 3,
        title: "Card 3",
        description: "Description for Card 3.",
        imageUrl: "https://placehold.co/250x150"
    },
    {
        id: 4,
        title: "Card 4",
        description: "Description for Card 4.",
        imageUrl: "https://placehold.co/250x150"
    }
];

// part 2
function displayCards(cards) {
    const container = document.getElementById('card-container');

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        
        // part 3
        cardDiv.addEventListener('click', () => {
            cardDiv.style.backgroundColor = 'green';
            cardDiv.style.color = 'white';
            console.log(`user clicked on card with ID: ${card.id}`);
            alert(`You clicked on ${card.title}`);
        });

        const img = document.createElement('img');
        img.src = card.imageUrl;
        img.alt = card.title;

        const title = document.createElement('h3');
        title.textContent = card.title;

        const description = document.createElement('p');
        description.textContent = card.description;

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = 'Learn More';

        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(description);
        cardDiv.appendChild(link);

        container.appendChild(cardDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayCards(cards);
});

// part 4
const totalTitleChars = cards.reduce((total, card) => total + card.title.length, 0);
console.log("Total characters in all titles:", totalTitleChars);

const sortedCards = [...cards].sort((a, b) => a.title.localeCompare(b.title));
console.log("Sorted cards by title:", sortedCards);

const keyword = "JavaScript";
const filterCards = cards.filter(card =>
    card.description.toLowerCase().includes(keyword.toLowerCase())
);
console.log(`Cards containing "${keyword}":`, filterCards);

const cardTitles = cards.map(card => card.title);
console.log("Card titles:", cardTitles);
