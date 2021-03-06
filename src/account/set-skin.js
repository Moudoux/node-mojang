const got = require('got')
const onApiError = require('../on-api-error')
const {USER_AGENT, MOJANG_API} = require('../constants')

/**
 * Sets a logged-in user's in-game skin to an online image.
 *
 * @param {Object} session - object from authentication
 * @param {String} session.accessToken - valid access token for the user's account
 * @param {String} profileId - which profile UUID to update the skin of
 * @param {String} skinUrl - Internet-accessible URL of the image file
 * @param {Boolean} [isSlim] - if true, the slim model will be used with the skin
 * @returns {Promise} resolves if access token, profile UUID, and skin URL are valid
 * @see {@link http://wiki.vg/Mojang_API#Change_Skin}
 */
function setSkin ({accessToken}, profileId, skinUrl, isSlim = false) {
  return got(`${MOJANG_API}/user/profile/${profileId}/skin`, {
    json: true,
    headers: {
      'user-agent': USER_AGENT,
      'authorization': `Bearer ${accessToken}`
    },
    form: true,
    body: {
      model: isSlim ? 'slim' : '',
      url: skinUrl
    }
  })
    .catch(onApiError)
    .then(res => res.body)
}

module.exports = setSkin
