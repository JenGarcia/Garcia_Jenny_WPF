//Jenny Garcia
//June 13, 2013
//Expressions Industry
var imageWidth = 17.778
var imageHeight = 14.222
//To find out the PPI we not only need the image size in inches, but also in pixels.
var pixelWidth = 1280
var pixelHeight = 1025
//Once inch and pixel information is gathered, we now have to do some math!:)
var widthInfo = pixelWidth / imageWidth //You must divide width in inches with pixel width
var heightInfo = pixelHeight / imageHeight //Divide height in inches with pixel height
console.log("The resolution for this image is " + widthInfo + heightInfo + " pixles per inch.")
