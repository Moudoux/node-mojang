const got = require('got')
const {USER_AGENT, MOJANG_API} = require('../constants')

/**
 * Gets a user's private Mojang account information.
 *
 * @param {String} accessToken - A valid access token for the user's account.
 * @returns {Promise.<MojangUser>} that resolves if access token is valid.
 * @see {@link http://wiki.vg/Mojang_API#User_Info}
 */
function getUserInfo (accessToken) {
  return got(`${MOJANG_API}/user`, {
    json: true,
    headers: {
      'user-agent': USER_AGENT,
      'authorization': `Bearer ${accessToken}`
    }
  })
    .then(res => res.body)
    .catch(err => {
      if (err.response) {
        err.name = err.response.body.error
        err.message = err.response.body.errorMessage
      }
      throw err
    })
}

module.exports = getUserInfo
