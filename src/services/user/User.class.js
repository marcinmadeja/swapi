export default class User {
  setUser(user) {
    this.user = user;
  }

  getImg(size = 'large', user) {
    return user.picture[size];
  }
}
