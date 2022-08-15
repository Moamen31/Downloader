let input = document.querySelector("input");
let btn = document.querySelector("button");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        return;
    }
    //function that takes input value
    fetchFile(input.value)
})

function fetchFile(url) {
    btn.textContent = "Downloading File..."
    btn.style.opacity = 0.7;
    //fetch the data from the url
    fetch(url)
        //returning file as a blob which deals with all sort of data as video and audio and imgs
        .then((res) => res.blob())
        .then((result) => {
            //URL.createObjectURL creates a url of the given blob object
            let tempUrl = URL.createObjectURL(result)
            //make an a tag (link)
            let aTag = document.createElement("a");
            //the href will be the url we made
            aTag.href = tempUrl;
            //then we make the file downloadable
            aTag.download = ""
            document.body.appendChild(aTag)
            // console.log(aTag)
            /*after typing the url and click on download it will click on the link
            and download it*/
            aTag.click();
            //then remove the a tag
            aTag.remove();
            URL.revokeObjectURL(tempUrl)
            btn.textContent = "Download File"
            input.value = ""
        }).catch(() => alert("Failed to download file!"))
}


/*
The URL.createObjectURL() static method creates a string
containing a URL representing the object given in the parameter.
*/

/*
The download() function of the downloads API downloads a file,
given its URL and other optional preferences.
*/

/*
download = "filename"

Specifies some text to be used as the filename (no need to specify
the file extension - the browser will automatically detect the correct
file extension and add it to the file, e.g. .img, .pdf. .txt, .html, etc.).
If omitted, the original filename is used.
*/

/*
The URL.revokeObjectURL() static method releases an existing object URL
which was previously created by calling URL.createObjectURL().
Call this method when you've finished using an object URL to let the
browser know not to keep the reference to the file any longer.
*/
