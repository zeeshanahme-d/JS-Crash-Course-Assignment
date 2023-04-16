(async () => {
    const response = await fetch("./data.json");
    const movies = await response.json();

    const genreElem = document.getElementById("genre");
    const yearElem = document.getElementById("year");
    const languageElem = document.getElementById("language");
    const btnElem = document.getElementById("btnElem");
    const table = document.getElementById("dataOutput");

    function displaySearchResult(results) {
        table.innerHTML = "";
        counter = 1;
        results.forEach((movie) => {
            let date = movie.release_date.split("-");
            let year = date[0];
            table.innerHTML += `
         <tr">
             <td class="counter" >${counter}</td>
             <td class="counter">${movie.title}</td>
             <td class="counter">${year}</td>
         </tr>
      `;
            counter++;

        })
    }

    function valCheck(value) {
        if (value == 'all') { return true }
        return false;
    }

    function search() {
        const genreQuery = genreElem.value.toLowerCase();
        const yearQuery = yearElem.value.toLowerCase();
        const languageQuery = languageElem.value.toLowerCase();

        const results = movies.filter(function (movie) {
            let date = movie.release_date.split("-");
            let year = date[0];
            if ((!valCheck(languageQuery)) && ((!valCheck(yearQuery) && (!valCheck(genreQuery))))) {
                return (
                    movie.original_language.toLowerCase().includes(languageQuery) &&
                    movie.genres.toString("").toLowerCase().includes(genreQuery) && year == yearQuery)
            }
            else if ((valCheck(languageQuery)) && ((!valCheck(yearQuery) && (!valCheck(genreQuery))))) {
                return (
                    movie.vote_average >= movie.genres.toString("").toLowerCase().includes(genreQuery) && year == yearQuery
                )
            }
            else if ((!valCheck(languageQuery)) && ((!valCheck(yearQuery) && (!valCheck(genreQuery))))) {
                return (
                    movie.original_language.toLowerCase().includes(languageQuery) && movie.genres.toString("").toLowerCase().includes(genreQuery)
                    && year == yearQuery)
            }
            else if ((!valCheck(languageQuery)) && ((valCheck(yearQuery) && (!valCheck(genreQuery))))) {
                return (
                    movie.original_language.toLowerCase().includes(languageQuery) &&
                    movie.vote_average >= movie.genres.toString("").toLowerCase().includes(genreQuery)
                )
            }
            else if ((!valCheck(languageQuery)) && ((!valCheck(yearQuery) && (valCheck(genreQuery))))) {
                return (
                    movie.original_language.toLowerCase().includes(languageQuery) &&
                    movie.vote_average >= year == yearQuery)
            }
        })

        console.log(results)
        displaySearchResult(results);

    }
    btnElem.addEventListener("click", search);

})();



