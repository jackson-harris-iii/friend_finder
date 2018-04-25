const friend = require('../data/friends')

exports.showAll = (req, res) => {
    return res.json(friends)
}

exports.recieve =  (req, res) => {
   
    let data = req.body;
    console.log(data)
    let all = friend.users;
    let info = Object.keys(data).map(function (k) { return parseInt(data[k]) });
    let score = info.slice(2);
    let bio = {}
    // let bio = info.slice(0,2);
    // bio.push(score);
    let idNum = all.length + 1;

    bio["id"] = idNum
    bio["name"] = req.body.name
    bio["photo"] = req.body.photo
    bio["score"] = score
    // console.log(bio)
    let match = friend.findFriend(bio, all)
    // console.log(friend.users)
    res.json(match)
    all.push(bio)
    // console.log(all)
}