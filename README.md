# Coding challenge
<p align="center">
  Spotify coding challenge V1.0
</p>

## List des répertoires
* coding-challenge: IHM front
* album-api: service back

## Description
Développer les fonctionnalités de l'application Spotify (recherche et ajouter un album dans la bibliothèque), en utilisant Angular, Spring Boot et open API de spotify.

## Fonctionnalités
* Rechercher un album ou artiste à partir de nom de l'album ou nom de l'artiste et afficher les résultats:
  * Afficher seulement le titre, la vignette, la date de sortie et la durée de chaque album
  * Afficher les 20 premières résultats uniquement
  * Permettre d'ajouter un album dans la liste des résultats dans la bibliothèque
* Gestion de la biliothèque personnelle
  * Ajouter un album via la recherche
  * Suppression d'un album de la liste
  * Définir un ou plusieurs albums comme album favoris
  * Appliquer un tag à un album

## Usage
```javascript
Lancer le service album-api avec un IDE Java (Intellij, Eclipse)
cd album-api
npm install
npm start
```

## Technologie
* Côté service:
  * Java 1.8
  * Spring Boot Starter 2.1.12-RELEASE
  * Mysql-connector
* Côté IH%:
  * Angular 11.2.4
  * ngf-bootstrap 0.0.5
  * sweetalert 2.1.2
# Coding challenge
