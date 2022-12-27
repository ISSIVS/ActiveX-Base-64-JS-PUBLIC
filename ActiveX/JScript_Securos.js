/*
 * Aglahir Jiménez Flórez
 * a.florez@isscctv.com
 */

var base64Object = new ActiveXObject("issmex.base64");

function Init()
{
    // Your trigger
}

function convertString()
{
    var b64String = base64Object.imageToBase64("C:\\Export\\imageExported.jpg");
    Log.Debug("Obtained string: " + b64String);
}

function convertImage()
{
    var path = "C:\\newImage.jpg";
    base64Object.base64ToImage(variable, path);
    Log.Debug("Image was exported");
}