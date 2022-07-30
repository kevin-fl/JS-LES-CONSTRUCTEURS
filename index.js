// CREE UN OBJET EN JS 



// 1ere maniere avec ajout de proprietes a l objet initial (age , profession)

//1ere methode
const monObjet = {                                          // -> objet 
    nom: "kevin",                                           // { nom: "kevin" --> proprietes} les proprietes sont comme des variables accrocher a l objet en qq sortes.

};

//2eme maniere
monObjet.age = 34;
monObjet.profession = "web developer"

//3eme maniere
monObjet["hobbies"] = "football"

console.log(monObjet);                                         // -> tt l objet 
console.log(monObjet.age);                                     // -> juste la propriété age de l objet 


// autre maniere sous forme de constructeur 

let maVoiture = new Object();
maVoiture.marques = "lamborghini";
maVoiture.annee = "2022";
maVoiture.couleur = "rouge";
maVoiture.proprietaire = "ines";
console.log(maVoiture);

 
//*si espace ds la propriete , notation avec crochets --> ex: monObjet ["date created"] ou monObjet[str]

// NB : notation avec crochets peut etre utilisé ds une boucle for...in  ou voir mdn docs


// STRUCTURED CLONE POUR RECUPERER TOUT L OBJET ! NOUVEAUTES 2022 
const copyMaVoiture = structuredClone(maVoiture);
console.log(copyMaVoiture);



//utilisation des backtick et du $
/*
let a = 5;
let b = 10;
console.log(`Quinze vaut ${a + b} et
non ${2 * a + b}.`);
// "Quinze vaut 15 et
// non 20."
*/