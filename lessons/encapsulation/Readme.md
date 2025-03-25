Implement and export the `getMutualFriends()` function, which takes two users as input and returns an array of mutual friends of these users.

User abstraction interface:

- `user.id` – returns the user ID, by which it can be distinguished from others.
- `user.getFriends()` – returns a list of friends (i.e. users).

```javascript
const user1 = makeUser({
friends: [
makeUser({ id: 1 }),
makeUser({ id: 2 }), // mutual friend
],
});
const user2 = makeUser({
friends: [
makeUser({ id: 2 }), // mutual friend
makeUser({ id: 3 }),
],
});

getMutualFriends(user1, user2); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ] - array consisting of one user, mutual friend
```
