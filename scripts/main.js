// main.js

function $(id) {
    return document.getElementById(id);
}

function createContentElement(node) {

    function createTitleElement(text) {
        const element = document.createElement("h3");
        element.textContent = text;
        return element;
    }

    function createParagraphElement(text) {
        const element = document.createElement("p");
        element.textContent = text
        return element;
    }

    function createArticleElement(paragraph) {
        const element = document.createElement("article");
        element.appendChild(paragraph);
        return element;
    }

    function createVideoTitleElement() {
        const element = document.createElement("h4");
        element.textContent = "Watch 🎥";
        return element;
    }

    function createVideoElement(video) {
        const element = document.createElement("iframe");
        element.src = video;
        element.allowFullscreen = true;
        element.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        element.frameBorder = 0;
        element.width = 560;
        element.height = 315;
        return element;
    }

    const title = createTitleElement(node.title);
    const para = createParagraphElement(node.description);
    const article = createArticleElement(para);
    const videoTitle = createVideoTitleElement();
    const video = createVideoElement(node.video);

    const element = document.createElement("div");
    element.className = "movie";
    element.appendChild(title);
    element.appendChild(article);
    element.appendChild(videoTitle);
    element.appendChild(video);

    return element;
}

function clearStack() {
    const stack = $("content");
    stack.textContent = "";
    // if (stack.hasChildNodes()) {
    //     for (let i = 0; i < stack.childElementCount; i++) {
    //         stack.removeChild(stack.childNodes[i]);
    //     }
    // }
}

function addVideoInStack(video, _) {
    const stack = $("content");
    const stackContent = createContentElement(video);
    stack.appendChild(stackContent);
}

function changeChannel(channel_name) {
    clearStack();
    channels[channel_name].forEach(addVideoInStack);
}

function addClickListenerTo(channel_name, _) {
    $(channel_name).addEventListener('click', function() {
        changeChannel(channel_name);
    })
}

let channelNames = [
    "geography", "science", "live_music", "surfing"
];

channelNames.forEach(addClickListenerTo);

changeChannel("geography");