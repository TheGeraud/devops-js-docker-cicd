#  Projet 1 — NodeJS + Docker + CI/CD (GitHub Actions)

![CI Pipeline](https://github.com/TheGeraud/devops-js-docker-cicd/actions/workflows/ci.yml/badge.svg)

Ce projet constitue la première étape de mon parcours **DevOps 2026**.  
Il met en place les bases essentielles d’un pipeline CI/CD moderne avec :

-  Application NodeJS simple  
-  Tests unitaires (Jest)  
-  Dockerisation de l’application  
-  Pipeline CI/CD automatisé (GitHub Actions)  
-  Build + Test + Push de l’image sur DockerHub  
-  (Bonus) Déploiement local via Terraform (Docker Provider)



  1. Objectifs du projet

- Maîtriser un workflow complet DevOps : **code → test → build → image → push**  
- Automatiser toutes les étapes via **GitHub Actions**  
- Publier une image Docker fonctionnelle sur DockerHub  
- Préparer le terrain pour les projets suivants (1.5 → IA, 2 → Kubernetes…)



  2. Structure du projet

 devops-js-docker-cicd/
│
├── app/
│   └── index.js           # Code NodeJS (API simple)
│
├── tests/
│   └── app.test.js        # Tests Jest
│
├── Dockerfile             # Image Docker
├── package.json           # Dépendances
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── ci.yml         # Pipeline CI/CD GitHub Actions
│
├── infra/
│   └── main.tf            # (Bonus) Terraform : déploiement du conteneur Docker
│
└── README.md

  3. Démarer l'application

- Installer les dépendances
    ```bash
    npm install
    
- Lancer l'application
    npm start
    
- Tester le navigateur
    ouvrir http://localhost:3000
  
  4. Exécuter les tests

npm test
  
  5. Docker : Build & Run
  
Construire l’image Docker
  docker build -t thegerauddocker/devops-js-docker-cicd:latest .
  
Lancer le conteneur
  docker run -p 3000:3000 thegerauddocker/devops-js-docker-cicd:latest

Verification: http://localhost:3000
  
  6.Pipeline CI/CD (GitHub Actions)

Le pipeline effectue automatiquement :

- Récupération du code
- Installation des dépendances
- Exécution des tests
- Build de l’image Docker
- Connexion à DockerHub via secrets
- Push automatique de l'image : docker push thegerauddocker/devops-js-docker-cicd:latest

Secrets configurés dans GitHub :
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
  
  7. Image Docker (DockerHub)
 
L’image est disponible publiquement ici :
https://hub.docker.com/r/<TON_USERNAME>/devops-js-docker-cicd
 
  8. (Bonus) Déploiement local via Terraform

Terraform déploie automatiquement : 
- Une image Docker
- Un conteneur exposé sur le port 3000

  

