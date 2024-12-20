const isArray = require('lodash/isArray')

// Module API

function checkEnum(constraint, value) {
  if (value === null) {
    return true
  }
  if (!isArray(value)) {
    return constraint.includes(value)
  } else {
    return value.every((o) => constraint.indexOf(o) !== -1)
  }
}

module.exports = {
  checkEnum,
}
