// Sélectionner toutes les cases du tableau
const cases = document.querySelectorAll("#tableau-tri td");

// Toutes les couleurs possibles
const couleurs = ["jaune", "grise", "verte", "marron", "rouge", "bleue"];

cases.forEach(caseTableau => {
    caseTableau.addEventListener("click", () => {

        // Si la case a déjà une couleur, on ne fait rien
        if (caseTableau.classList.contains("deja-trie")) {
            return;
        }

        // Récupérer la poubelle correcte
        const poubelle = caseTableau.dataset.poubelle;

        // Appliquer la couleur correspondante
        caseTableau.classList.add(poubelle);
        caseTableau.classList.add("deja-trie");
    });
});