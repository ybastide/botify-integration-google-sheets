function getTokenFromProperties() {

}

function isToken(_) {
  return true
}

// noinspection JSUnusedGlobalSymbols
/**
 *
 * @param {String} username
 * @param {String} projectSlug
 * @param {String[]} collections
 * @param {String[]} periods
 * @param {String[]} dimensions
 * @param {String[]} [metrics]
 * @param {Object} [filters]
 * @param {Object} [postFilters]
 * @param {Object} [sort]
 * @param {Boolean} [errors] Return error messages (default: false)
 * @return {Array} The result of the aggregation.
 * @customfunction
 */
function BOTIFY_PROJECT_QUERY(
  username,
  projectSlug,
  collections,
  periods,
  dimensions,
  metrics,
  filters,
  postFilters,
  sort,
  errors,
) {

  let apiToken = getTokenFromProperties()
  if (isToken(arguments[0])) {
    let args = Array.prototype.slice.call(arguments)
    if (apiToken === null) {
      apiToken = args.shift()
    }
    username = args.shift()
    projectSlug = args.shift()
    collections = args.shift()
    periods = args.shift()
    dimensions = args.shift()
    metrics = args.shift()
    filters = args.shift()
    postFilters = args.shift()
    sort = args.shift()
  }

  if (apiToken === null)
    throw new Error(
      "API Token is missing in the Addon configuration. Click on the Botify Addon item in the menu to add your token."
    )
  if (!username) throw new Error("username is missing in parameters")
  if (!projectSlug) throw new Error("projectSlug is missing in parameters")
  if (!collections) throw new Error("collections is missing in parameters")

  // Generate JSON
  // Call endpoint
  // Generate result, handle errors
}
