const person = { name: 'Ratul', age: 18, job: 'programmer', gfName: 'Misty', address: 'Bangladesh', phone: '01746855531', friends: ['Trump', 'Emma', 'Rock']};

const { phone, gfName, address } = person;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address);
// console.log(gfName, phone, address);

const complexObject = {
    name: 'Abraham',
    info: {
        address: 'boshundhora',
        leader: 'Lion Mama'
    }
}

const {leader} = complexObject.info

console.log(leader)


const friends = ["Salman", "Shahrukh", "Amir", "John"];
const [firstFriend, ...nextFriends] = friends;
console.log(nextFriends)