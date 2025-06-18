import React, { useEffect, useState } from 'react'
import Tesseract from 'tesseract.js'
const TextRecognition = ({ selectedImage, getRecoText }) => {
  const [recognizedText, setRecognizedText] = useState('')
  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        const result = await Tesseract.recognize(selectedImage)
        setRecognizedText(result.data.text)
        getRecoText(result.data.text)
      }
    }
    recognizeText()
  }, [selectedImage])
  return (
    <div>
      <img src={selectedImage} style={{ width: '100%' }} />
      {/* <p>{recognizedText}</p> */}
    </div>
  )
}
export default TextRecognition
