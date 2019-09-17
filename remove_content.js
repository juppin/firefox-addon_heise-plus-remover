
function removeArticleWhichContainsElementWithClassName(names) {
    var elements = document.getElementsByClassName(names);
    console.log(elements);
    //[].forEach.call(elements, function (element) {
    for (var element of elements) {
        console.log("found " + element.localName + " with class name: " + names);
        currentElement = element;
        while (currentElement.parentElement != null) {
            currentElement = currentElement.parentElement;
            console.log(currentElement.tagName);
            if (currentElement.tagName === 'ARTICLE') {
                console.log("removing: " + currentElement.tagName);
                currentElement.remove();
                break;
            }
        }
    }
    //});
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    var classNames = 'heiseplus-logo-small'
    removeArticleWhichContainsElementWithClassName(classNames);
});
