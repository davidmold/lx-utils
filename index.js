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

function getMonths() {
  return ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
}

module.exports = {
  waitfor, getFileAsDataUrl, getDataUrlAsJpegFile, getDataUrlAsGifFile, getMonths
}