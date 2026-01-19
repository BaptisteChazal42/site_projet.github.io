document.addEventListener("DOMContentLoaded", () => {

    const cases = document.querySelectorAll("#tableau-tri td");

    cases.forEach(caseTableau => {
        caseTableau.addEventListener("click", () => {

            if (caseTableau.classList.contains("active")) return;

            caseTableau.classList.add("active");
        });
    });

});