const got = require('got')
const onApiError = require('../on-api-error')
const {USER_AGENT, YGGDRASIL_API} = require('../constants')

/**
 * Authenticates a user with their Mojang credentials.
 *
 * *Use `agent` if session is for a game client, ie. a Minecraft launcher.*
 *
 * **Handle access tokens securely, but they do invalidate easily. **
 *
 * @param {Object} credentials - the payload of the auth request
 * @param {String} credentials.username - email or username of a Mojang account
 * @param {String} credentials.password - password for the given account
 * @param {String=} credentials.clientToken - if empty, server will generate a client token
 * @param {Object=} credentials.agent - if valid, adds `selectedProfile` to response
 * @param {String} credentials.agent.name - name of the agent ('Minecraft' or 'Scrolls')
 * @param {Number} credentials.agent.version - version number of the agent (use `1`)
 * @returns {Promise.<MojangSession>} resolves if credentials are valid
 * @see {@link http://wiki.vg/Authentication#Authenticate}
 * @example
 * const clientToken = 'loaded from settings'
 * const agent = {name: 'Minecraft', version: 1}
 * const session = await mojang.authenticate({username, password, clientToken, agent})
 * console.debug('access token', session.accessToken)
 * console.debug('profile id', session.selectedProfile.id)
 * console.debug('minecraft ign', session.selectedProfile.name)
 * console.debug('user id', session.user.id)
 */
function authenticate ({username, password, clientToken, agent}) {
  return got(`${YGGDRASIL_API}/authenticate`, {
    headers: { 'user-agent': USER_AGENT },
    json: true,
    body: {
      agent,
      username,
      password,
      clientToken,
      requestUser: true
    }
  })
    .catch(onApiError)
    .then(res => res.body)
}

module.exports = authenticate
