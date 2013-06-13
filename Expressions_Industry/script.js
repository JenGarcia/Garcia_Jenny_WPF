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
var widthResult = Math.round(widthInfo*10)/10 //Multiply width info by 10 then divide it by 10
var heightResult = Math.round(heightInfo*1)/1 //Multiply height info by 1 then divide it by 1
console.log("The resolution of this image is " + widthResult + "x" + heightResult + " pixels per inch.")
