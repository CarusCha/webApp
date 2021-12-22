

function displayVideo(urlList, className) {
    // add contents
    var contentHTML = "";
    for (url of urlList) {
        contentHTML += `
        <div iframe_container">
            <iframe src="${url}}" allowfullscreen title="${url}"></iframe>
        </div>
        `;
    }

    document.querySelector(className).innerHTML = htmlText;
}

