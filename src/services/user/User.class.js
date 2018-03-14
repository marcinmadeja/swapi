export default class User {
  setUser(user) {
    this.user = user;
  }

  getImg(user, size = 'large') {
    return user.picture[size];
  }

  getName(user) {
    const { name: { first, last } } = user;
    return `${first} ${last}`;
  }
}
