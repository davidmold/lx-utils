function waitfor (len) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve()
      }, len)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  waitfor
}