export default ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
      return this.friends.slice(); // return a copy of the array so that it is not modified from the outside
    },
  });
