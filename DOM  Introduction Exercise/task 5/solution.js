function solve() {
   let inputButton = document.getElementById("searchBtn").addEventListener("click", onClick);



   function onClick() {
      let elements = document.querySelectorAll("tbody tr");
      let searchFiled = document.getElementById("searchField").value;

      Array.from(elements).forEach(x => {
         x.className = "";
      })


      Array.from(elements).forEach(el => {
         let elChildrens = Array.from(el.children);
         if (elChildrens.some(x => x.textContent.includes(searchFiled))) {
            el.className = "select";
         }
      });
   }
}


// el.className = '';