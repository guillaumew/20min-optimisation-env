Ce répository sert de base de code pour la présentation [20 min pour réduire l'empreinte environnementale d'un site](https://simbios.fr/formations/30min-reduire-empreinte-environnemental-site).

## Intro
Il y a encore quelques mois j’étais PO, maintenant je suis un freelance qui aide les entreprises à réduire l’impact environnemental de leurs activités numériques.
Dans mon nouveau job, je suis amené à faire pas mal d’analyses de site. Je me rends compte qu’on fait tous les mêmes erreurs d’un point de vue écologique… Je dis nous, parce qu’il y a encore 5 ans, même si je faisais attention à mon empreinte,  j’étais pas tellement sensibilisé au coût environnemental du numérique et donc je ne faisais pas ce qu’il fallait.
Je vais donc prendre comme exemple le moi d’il y a 5 ans qui a fait un site pour sa troupe d’improvisation. On va voir ce que ça vaut.

## Audit du site
Pour avoir une idée de la performance environnementale d’un site, il existe un outil très facile d’utilisation : l’eco-index. Ce dernier se base sur la taille de la page, le nombre de requêtes et la taille du DOM.
 - Requêtes : 39
 - Taille : 4.14 Mo
 - DOM : 180

Par catégories
| Catégorie  | Requêtes | Taille     |
|---------------|---------------|------------|
| Index.html |    	1 |      7 ko |
| CSS          |    	7 |  237 ko |
| Fonts         |    	6 |  218 ko |
| Javascript  |    	6 |  385 ko |
| Facebook   |            12 |  674 ko |
| Images       |    	7 | 2620 ko |
| TOTAL       |            39 | 4141 ko |

Score : 70/100  B

Ca semble correct comme note ? On va voir que pour un site comme ça, on peut faire beaucoup, beaucoup mieux... et sans faire un gros effort.

## Actions
Pour lancer la stack technique, RDV sur [la doc tech](/TECH.md).
S
On retrouvera les bonnes pratiques à mettre en place dans l'[article de suivi de l'atelier](https://simbios.fr/blog/2024/02/01/dix-min-pour-reduire-empreinte-environnementale-site).

## Conclusion

- Comparaison avant /après.
  - -95% taille
  - -75% requêtes
  - -35% DOM
- Ouverture, les étapes d’après : 
  - Optimisation du code Changer bootstrap par PureCSS ou css natif
  - Optimisations métiers du code
- Bien penser à la conception fonctionnelle
- Ne pas trop chercher à optimiser penser à la balance coût des optimisations vs apport (qui varie beaucoup en fonction du nombre d'utilisateur.ice.s)
