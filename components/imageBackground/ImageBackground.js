import React, { useEffect, useRef, useState } from "react"
const ImageWithBackground = ({ src, className, title }) => {
  const [bgColor, setBgColor] = useState("#000000")
  const [textColor, setTextColor] = useState("#ffffff")
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    img.onload = () => {
      const canvas = document.createElement("canvas")
      const c = canvas.getContext("2d")
      c.width = canvas.width = img.width
      c.height = canvas.height = img.height
      c.clearRect(0, 0, c.width, c.height)
      c.drawImage(img, 0, 0, img.width, img.height)

      const colors = getColors(c)
      const avgColor = getAverageColor(colors)
      setBgColor(`#${avgColor}`)
      setTextColor(invertColor(`#${avgColor}`))
    }
  }, [src])

  const getColors = (context) => {
    const imageData = context.getImageData(0, 0, context.width, context.height)
    const data = imageData.data
    let r = 0,
      g = 0,
      b = 0,
      count = 0

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3]
      if (alpha < 128) continue // skip transparent pixels

      r += data[i]
      g += data[i + 1]
      b += data[i + 2]
      count++
    }

    r = Math.floor(r / count)
    g = Math.floor(g / count)
    b = Math.floor(b / count)

    return { r, g, b }
  }

  const getAverageColor = ({ r, g, b }) => {
    return ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")
  }

  return (
    <div
      className={className}
      style={{
        backgroundColor: bgColor,
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt='Dynamic Background'
        width='90%'
        height={"auto"}
        style={{ display: "block", margin: "auto" }}
      />
      {title && (
        <p
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            padding: "10%",
            color: `${textColor}!important`,
          }}
        >
          {title}
        </p>
      )}
    </div>
  )
}

export default ImageWithBackground

//INVERT COLOR
function invertColor(hex, bw) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.")
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF"
  }
  // invert color components
  r = (255 - r).toString(16)
  g = (255 - g).toString(16)
  b = (255 - b).toString(16)
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b)
}

function padZero(str, len) {
  len = len || 2
  var zeros = new Array(len).join("0")
  return (zeros + str).slice(-len)
}
