document.getElementById("scrollButton").addEventListener("click", function() {
    const targetElement = document.getElementById("targetParagraph");
    targetElement.scrollIntoView({ behavior: 'smooth' });
});