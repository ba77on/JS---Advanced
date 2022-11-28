function toggle() {
    let buttonMore = document.querySelector('.button');
    let addText = document.getElementById('extra');

    buttonMore.textContent = buttonMore.textContent === "More" ? "Less" : "More";
    addText.style.display = addText.style.display === "block" ? "none" : "block";

}