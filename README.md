# initiation à Gitlab

# Instructions en lignes de commande

## Configuration générale

- Vous devez définir sur votre machine un nom et une adresse email (à faire **une seule fois** sur votre machine personnelle)

```sh
git config --global user.name "votre_nom"
git config --global user.email "votre_email@"
```

# Premier Commit

```sh
# on clone le dépôt
git clone git@gitlab.univ-lr.fr:votre_identifiant/nom_du_depot_git.git
# on se place dans le bon dossier
cd nom_du_depot_git
# Ajoutez les fichiers fournis sur moodle dans le dossier
# ...

# on se place dans la branche develop
git checkout develop
# on ajoute tous les fichiers à git
git add .
# on crée un point de version et un message.
git commit -m "Ajout des fichiers html/css"
# on place sur le dépôt central
git push
```