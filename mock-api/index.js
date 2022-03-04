var casual = require('casual');
casual.seed('rabbit horse'); //provide a seed to 'lock-in' the randomized data between launches

module.exports = () => {
    const data = { lendables: [] }
    // Create 15 lendables
    data.lendables = generateLendables(data);
    return data
}

function generateLendables(count) {
    let data = []
    for (let i = 0; i < 15; i++) {
        data.push({
            id: i,
            name: casual.words(casual.integer(1, 3)),
            lender: casual.username,
            tags: casual.array_of_words(casual.integer(0, 6)),
            description: casual.description,
            image: `https://picsum.photos/seed/${casual.word}/200/300`
        });
    }
    return data
}
