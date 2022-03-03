var casual = require('casual');

module.exports = () => {
    const data = { lendables: [] }
    // Create 15 lendables
    for (let i = 0; i < 15; i++) {
        data.lendables.push({
            id: i,
            name: casual.words(casual.integer(1, 3)),
            lender: casual.username,
            tags: casual.array_of_words(casual.integer(0, 6)),
            description: casual.description,
            image: `https://picsum.photos/seed/${casual.word}/200/300`
        })
    }
    return data
}
