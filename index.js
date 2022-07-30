                                                        // CREE UN OBJET EN JS* 

// 1ere maniere avec ajout de proprietes a l objet initial (age , profession)

//1ere maniere
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

// EXEMPLE D OBJET DANS UN OBJETS   --> moteur est lui meme un objet contenant ses propres proprietes dans l objet ma ferrari 

let maFerrari = { marque: "bleu", roue: 4, moteur: { cylindre: 4, taille: 2.2 } };



                                                                        // LES CONSTRUCTEURS*


//on peut creer des objets d'une autre facon , en suivant 2 etapes :


//1ERE ETAPE
// On définit une fonction qui sera un constructeur définissant le type de l'objet. La convention, pour nommer les constructeurs,
// est d'utiliser une majuscule comme première lettre pour l'identifiant de la fonction.

function Voiture(fabricant, modele, annee, proprietaire) {
    this.fabricant = fabricant;
    this.modele = modele;
    this.annee = annee;
    this.proprietaire = proprietaire;
}

//*on utilise le mot clé this 

//2EME ETAPE
//On crée une instance de l'objet avec new

let maVoit = new Voiture("ferrari", "525", 2000);
console.log(maVoit);


//↑ grace au constructeur function Voiture , on peut mnt crée autant d objets Voiture que necessaire , exemple:↓
let maVoitJulien = new Voiture("BMW", "M3", 2007)
console.log(maVoitJulien);


// si on crée une nouvelle fonction Personne ↓

function Personne(nom, age, sexe) {
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
};

//on instancie 2 nouveaux objets personne avec

let max = new Personne("Maxime", 33, "M");
let kevin = new Personne("Roger Dupuis", 39, "L");

// on peut réecrire la fonction de definition (1er constructeur) pour le type voiture
//pour inclure un proprietaire par exemple . ↑ voir la function voiture 
//mnt on peut rajouter l argument proprietaire sur des nouveaux vehicule ↓

let voiture1 = new Voiture("Bugatti", "Veyron", 2016, max);

console.log(voiture1.proprietaire.nom);

let voiture2 = new Voiture("ford", "mustang", 2002, kevin);

// a donner que le dernier argument n est pas un string mais bien un objet (nouvelle objet rajouter)





                                            // AUTRE METHODE POUR CREER DES OBJETS TRES UTILES OBJET.create()*



//permet de choisir le prototype pour l'objet qu'on souhaite créer,
// sans avoir à définir un constructeur.


let Animal = {
    type: "Invertébrés",        // Valeur par défaut value of properties
    afficherType: function () {  // Une méthode pour afficher le type Animal
        console.log(this.type);
    }
}


let animal1 = Object.create(Animal);
animal1.afficherType();
console.log(animal1);
//-> affichera invertebres ;) 


// autre exemple on cree un nouveau type d animal 
let poisson = Object.create(Animal);
poisson.type = "poisson";
poisson.afficherType();
console.log(poisson);





                                                                        // L HERITAGE*

//tous les objets javascript herite d un autre objet , on l appelle prototype. accessible via l objet prototype du constructeur


// si on declare maVoiture.couleur = "rouge" on recupere que comme cela et pas de maniere ordinal (avec un index par exemple)
// si c'est avec l index alors on recup avec l index seulement maVoiture[5] = "25 km/h" on recupere en faisait maVoiture[5]. 

// Il existe une exception à cette règle lorsqu'on manipule des objets "semblables à des tableaux" provenant d'API Web telles que l'objet forms. Pour ces objets semblables à des tableaux, on peut accéder à une propriété de l'objet grâce à son nom (si l'attribut name est utilisé sur l'élément HTML) ou grâce à son index selon l'ordre dans le document. Ainsi, si on souhaite cibler un élément <form> du document possédant un attribut name qui vaut monForm et que cet élément est le deuxième élément du document, on pourra y accéder avec document.forms[1], document.forms["monForm"] ou encore avec document.forms.monForm.



                                                            //Définir des propriétés pour un type d'objet
/*On peut ajouter une propriété à un type précédemment défini en utilisant la propriété prototype. Cela permettra de définir une propriété qui sera partagée par tous les objets d'un même type plutôt qu'elle ne soit définie que pour un seul objet. Le code suivant permet d'ajouter une propriété couleur à tous les objets de type voiture. On affecte ensuite une valeur à cette propriété pour l'objet voiture1.

Voiture.prototype.couleur = null;
voiture1.couleur = "noir";
*/



                                                                    // DEFINIR UNE METHODE*
//une methode est une fonction associé a un objet . 


//exemple
function afficheVoiture() {
    let resultat = `Une belle ${this.modele}, fabriquée en ${this.annee}
     par ${this.fabricant}`;
    console.log(resultat);
  }


 // On peut ensuite ajouter cette fonction comme méthode dans le constructeur 
 //avec cette instruction :
 this.afficheVoiture = afficheVoiture;

 //La définition complète de Voiture serait donc :

 function Voiture(fabricant, modele, annee, proprietaire) {
    this.fabricant = fabricant;
    this.modele = modele;
    this.annee = annee;
    this.proprietaire = proprietaire;
    this.afficheVoiture = afficheVoiture;
  }

 // On pourra donc ensuite appeler la méthode afficheVoiture pour chaque objet de ce type :

voiture1.afficheVoiture();
voiture2.afficheVoiture();





                                                    // Utiliser this pour les références aux objets*


const responsable = {
    nom: "Jean",
    age: 27,
    poste: "Ingénieur logiciel"
   };
   
   const stagiaire = {
    nom: "Ben",
    age: 21,
    poste: "Stagiaire ingénieur logiciel"
   };
   
   function direBonjour() {
    console.log('Bonjour, mon nom est', this.nom)
   };
   
   // on ajoute direBonjour aux deux objets
   responsable.direBonjour = direBonjour;
   stagiaire.direBonjour = direBonjour;
   
   responsable.direBonjour(); // Bonjour, mon nom est John'
   stagiaire.direBonjour();   // Bonjour, mon nom est Ben'


   //autre exemple 

   function direMonAge(){
    console.log("J'ai " + this.age + " ans.");
  };
  
  responsable.direMonAge = direMonAge;
  responsable.direMonAge(); // J'ai 27 ans.
  
   


                                                                //Supprimer des proprietes* 

// retirer des proprietes grace a l operateur delete .

// On crée un nouvel objet, monObj, avec deux propriétés a et b.
let monObj = new Object;
monObj.a = 5;
monObj.b = 12;

// On retire la propriété a, monObj a donc uniquement la propriété b
delete monObj.a;
console.log("a" in monObj) // produit "false"


                                                                 // comparer des objets *


// Deux variables avec deux objets distincts
// qui ont les mêmes propriétés
let fruit = {nom: "pomme"};
let fruit2 = {nom: "pomme"};

fruit == fruit2  // renvoie booleen false
fruit === fruit2 // renvoie booleen false

                                                    //NB METHODE GETOWNPROPERTYNAMES POUR TOUT RECUPERER toutes les keys DANS L OBJET 
const object1 = {
    a:1,
    b:2,
    c:3
};

console.log(Object.getOwnPropertyNames(object1));
//expected output : array [a,b,c]