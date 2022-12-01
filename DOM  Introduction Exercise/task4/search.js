function search() {
   let allTowns = Array.from(document.querySelectorAll('#towns li'));
   let searchingText = document.getElementById('searchText').value;
   let numOfMatches = document.getElementById('result');

   allTowns.forEach(x => {
      x.style.fontWeight = "normal";
      x.style.textDecoration = "none";
   })
   let matcher = 0;

   allTowns.forEach(x => {
      let singleTown = x.textContent;
      if (singleTown.indexOf(searchingText) >= 0) {
         x.style.fontWeight = "bold";
         x.style.textDecoration = "underline"
         matcher++
      }
   })
   numOfMatches.textContent =`${matcher} matches found`
}
