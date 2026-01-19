// Sélectionne toutes les cases du tableau
const cases = document.querySelectorAll("#tableau-tri td");

cases.forEach(caseTableau => {
    caseTableau.addEventListener("click", () => {

        // Supprime les anciennes couleurs si on reclique
        caseTableau.classList.remove("jaune", "bleue", "verte");

        // Récupère le type de poubelle
        const poubelle = caseTableau.dataset.poubelle;

        // Applique la bonne couleur
        caseTableau.classList.add(poubelle);
    });
});