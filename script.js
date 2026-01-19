// Sélectionner toutes les cases du tableau
const cases = document.querySelectorAll("#tableau-tri td");

cases.forEach(caseTableau => {
    caseTableau.addEventListener("click", () => {

        // Si déjà activée, on ne fait rien
        if (caseTableau.classList.contains("active")) {
            return;
        }

        // Ajouter la classe "active" pour afficher la couleur
        caseTableau.classList.add("active");
    });
});