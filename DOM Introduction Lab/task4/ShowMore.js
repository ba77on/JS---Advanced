function showText() {
    let readMore = document.getElementById('more');
    let hiddenText = document.getElementById('text');

    readMore.style.display = 'inline' ? 'none' : 'inline';
    hiddenText.style.display = 'none' ? 'inline' : 'none';
}