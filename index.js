/**
 * @param {number} [len] - time to wait in ms.
 */
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

/**
 * @param {File} [file] - An image file.
 */
async function getFileAsDataUrl(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onerror = error => {
      reject(error)
    }
    reader.onload = event => {
      resolve(event.target.result)
    }
    reader.readAsDataURL(file)
  })
}

/**
 * @param {string} [dataUrl] - An image dataURI.
 * @param {number} [width] - The desired width to scale the image to
 * @param {string} [filename] - Name of the file e.g. myimage.jpg.
 */
async function getDataUrlAsJpegFile(dataUrl, width, filename) {
  const img = new Image()
  return new Promise((resolve, reject) => {
    img.onerror = (err) => {
      reject(err)
    }
    img.onload = () => {
      const elem = document.createElement('canvas')
      if(img.width < width) {
        width = img.width
      }
      const sf = width / img.width
      let height = Math.ceil(img.height * sf)
      elem.width = width
      elem.height = height
      
      const ctx = elem.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)
      ctx.canvas.toBlob((blob) => {
        const file = new File([blob], filename, {
          type: 'image/jpeg',
          lastModified: Date.now()
        })
        resolve(file)
      }, 'image/jpeg', 0.9)
    }
    img.src = dataUrl
  })
}


/**
 * @param {string} [dataURI] - An image dataURI.
 * @param {string} [filename] - Name of the file e.g. myimage.gif.
 */
function getDataUrlAsGifFile(dataURI, filename) {
  let wh = dataURI.indexOf(',')
  let str = dataURI.slice(wh + 1)
  let byteString = atob(str)
  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new File([ab], filename, {
    type: 'image/gif',
    lastModified: Date.now()
  })
}

/**
 * 
 * @returns {string[]} short month names, all lower case
 */
function getMonths() {
  return ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
}

/**
 * 
 * @returns {string[]} the full month names starting with caps
 */
function getLongMonths() {
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

module.exports = {
  waitfor, getFileAsDataUrl, getDataUrlAsJpegFile, getDataUrlAsGifFile, getMonths, getLongMonths
}