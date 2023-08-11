let studentRec = [
    {
        name: "Mohini",
        age: 23,
        score: 85
    },
    {
        name: "Aman",
        age: 25,
        score: 91
    },
    {
        name: "Mojo",
        age: 24,
        score: 87
    },
    {
        name: "Maahi",
        age: 22,
        score: 92
    },
    {
        name: "Adnan",
        age: 24,
        score: 96
    },

]
studentRec.forEach(function (records) {
    if (records.score > 90) {
        console.log(`${records.name} scored more than 90`)
    }
})