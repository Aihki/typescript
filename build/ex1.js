"use strict";
// TODO: Create a user object using the defined interface. Add all properties
const user1 = {
    username: 'Seppo',
    email: 'a@b.fi',
    bio: 'Hei, olen sepi',
};
// TODO: Create another user object using the defined interface. Don't add bio
const user2 = {
    username: 'Aivari',
    email: 'b@a.fi',
};
// Function to display user information
const displayUserInfo = (user) => {
    // TODO: console log all properties of a user separately. Example: console.log(user.email)
    console.log(user.username);
    console.log(user.email);
    if (user.bio) {
        console.log(user.bio);
    }
};
// Display user information
displayUserInfo(user1);
displayUserInfo(user2);
