var users =[
    {
    "id": 1,        
    "name": "Goku",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "score": [
                1,
                1,
                1,
                4,
                1,
                1,
                2,
                4,
                2,
                1
            ]
},
    {
        "id": 2,
        "name": "Vegeta",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "score": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

var test = {
    "id": 2,
        "name": "Vegeta",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
                "score": [
                    5,
                    1,
                    2,
                    4,
                    2,
                    1,
                    3,
                    5,
                    4,
                    2
                ]
}

function findFriend(current, all)  {
    let matchScore = 50
    let match = null 
    all.forEach(element => {

        let check = compatible(element.score, current.score) 
        if (check < matchScore) {
            matchScore = check
            match = element.id
            console.log(match)
        }     
    })
    const result = users.find( user => user.id === match) 
    return result
}

function compatible(possible, current) {
    let check = []
    for (let i = 0; i < current.length; i++) {
         let diff = Math.abs(current[i] - possible[i])
         check.push(diff)

    }
    let result = check.reduce(getSum)
    return result
}

function getSum(total, num) {
    return total + num;
}

module.exports = { users, findFriend }  
