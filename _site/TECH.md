# Technique

## Installation

Il faut avoir Ruby, RubyGems, GCC et Make sur son ordinateur. Voir le guide d'installation. Puis il suffit de faire un bundle install

## Lancement

Faire `bundle exec jekyll serve`

ou

`JEKYLL_ENV=production bundle exec jekyll serve`

Cela doit créer un site temporaire qui va se mettre à jour à chaque modification de fichier.

## Sans Jekyll

Si l'installation de Jekyll pose problème, vous trouverez directement le site dans le répertoire [_site](/_site/). Il est tout à fait possible de travailler directement dans ce répertoire.

Attention, si le site n'est pas servi (par Jekyll ou autre), les analyses de l'eco-index ne fonctionneront pas.