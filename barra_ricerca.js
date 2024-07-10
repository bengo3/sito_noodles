function search() {
    console.log("Funzione search() chiamata");
    var input = document.getElementById("search-input").value.toLowerCase();
    var itemsToSearch = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    var searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    // Dichiarazione e inizializzazione della variabile resultsFound
    var resultsFound = false;

    itemsToSearch.forEach(function(item) {
        var itemText = item.textContent.toLowerCase();
        if (itemText.includes(input)) {
            var resultItem = document.createElement("p");
            resultItem.textContent = itemText;
            searchResults.appendChild(resultItem);

            // Se trova almeno un risultato, imposta resultsFound a true
            resultsFound = true;
        }
    });

    // Mostra un messaggio se nessun risultato è stato trovato
    if (!resultsFound) {
        var noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "Nessun risultato trovato.";
        searchResults.appendChild(noResultsMessage);
    }
}
