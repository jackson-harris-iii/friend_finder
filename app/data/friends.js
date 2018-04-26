var users =[
    {
    "id": 1,        
    "name": "Goku",
        "photo": "http://www.stickpng.com/assets/images/584e834a6a5ae41a83ddee37.png",
            "score": [
                5,
                2,
                1,
                2,
                3,
                5,
                3,
                4,
                5,
                5
            ]
    },
    {
        "id": 2,
        "name": "Ajotta",
        "photo": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/21192277_650040961868459_5999546714189251730_n.jpg?_nc_cat=0&oh=e6a692b97e076f8e3bb54214af6c74ce&oe=5B94719F",
        "score": [
            4,
            3,
            4,
            2,
            5,
            4,
            4,
            3,
            2,
            5
        ]
    },
    {
        "id": 3,
        "name": "Sylvanas",
        "photo": "https://ih0.redbubble.net/image.173786703.7034/flat,750x1000,075,t.u2.jpg",
        "score": [
            4,
            3,
            4,
            3,
            4,
            5,
            5,
            5,
            4,
            1
        ]
    },
    {
        "id": 4,
        "name": "Motoko Kusanagi",
        "photo": "http://moe.animecharactersdatabase.com/uploads/chars/9180-181486741.jpg",
        "score": [
            4,
            5,
            4,
            4,
            5,
            5,
            2,
            3,
            4,
            3
        ]
    },
    {
        "id": 5,
        "name": "Brock",
        "photo": "https://vignette.wikia.nocookie.net/videogames-fanon/images/b/b4/Brock_DP_anime_3.png/revision/latest?cb=20150620011428",
        "score": [
            5,
            1,
            2,
            3,
            3,
            5,
            1,
            2,
            4,
            5
        ]
    }
]

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
