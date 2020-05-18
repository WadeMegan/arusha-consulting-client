import config from '../config'

const UsersService = {

  //name
  saveName(name) {
    window.sessionStorage.setItem(config.NAME_KEY, name)
  },
  getName() {
    return window.sessionStorage.getItem(config.NAME_KEY)
  },
  clearName() {
    window.sessionStorage.removeItem(config.NAME_KEY)
  },

  //profileImg
  saveProfileImg(profileImg) {
    window.sessionStorage.setItem(config.PROFIMG_KEY, profileImg)
  },
  getProfileImg() {
    return window.sessionStorage.getItem(config.PROFIMG_KEY)
  },
  clearProfileImg() {
    window.sessionStorage.removeItem(config.PROFIMG_KEY)
  },

  //email
  saveEmail(email) {
    window.sessionStorage.setItem(config.EMAIL_KEY, email)
  },
  getEmail() {
    return window.sessionStorage.getItem(config.EMAIL_KEY)
  },
  clearEmail() {
    window.sessionStorage.removeItem(config.EMAIL_KEY)
  },

  //userId
  saveUserId(userId) {
    window.sessionStorage.setItem(config.ID_KEY, userId)
  },
  getUserId() {
    return window.sessionStorage.getItem(config.ID_KEY)
  },
  clearUserId() {
    window.sessionStorage.removeItem(config.ID_KEY)
  }
}

export default UsersService