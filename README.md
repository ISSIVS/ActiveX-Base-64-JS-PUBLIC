# **ActiveX Base 64 JS**

# Aglahir Jiménez Flórez
# a.florez@isscctv.com

## Image File to Base 64 String


```
function imageToBase64(path)
```

* Receives the image location path as parameter
* Returns Base64 String



## Base 64 String to Image File


```
function base64ToImage(base64, path)
```

* Receives the Base64 string and FULL location path where the image is going to be stored (file extension should also be included, JPG or PNG should be fine).
* Won't return any result


## Installation

1. Copy the files "Base64Javascript.dll" and "Base64Javascript.pdb" into SecurOS root folder

2. Open Windows CMD with admin privileges and execute:

>    C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm /codebase "C:\Program Files (x86)\ISS\SecurOS\ServiciosLPR_ISS.dll"


***Continue if correct registering***

3. Create JScript with using the ActiveX Object as shown on the template "JScript_Securos.js"
