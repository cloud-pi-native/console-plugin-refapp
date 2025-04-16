# C'est quoi ?
Ceci est un plugin additionnel pour la console [Cloud-Pi-Native](https://github.com/cloud-pi-native/console)
Il permet d'ajouter ou de supprimer des rérérentiels applicatif dans l'application [referentiel-applications](https://github.com/dnum-mi/referentiel-applications)

## Installation du plugin dans la console
### en mode developpement
1. Créer un nouveau répertoire sur votre os. exemple sur une OS unix `mkdir /home/${user}/plugin/ && cd /home/${user}/plugin/`
2. Clone this project dans ce nouveau répertoire. `git clone https://github.com/cloud-pi-native/console-plugin-refapp.git`
3. Installer les dependences avec la commande `pnpm install`
4. Compiler le code typescript avec la commande `pnpm build`
5. Dans le project [console](https://github.com/cloud-pi-native/console) ajouter les valiables d'environnements suivante en fonction de l'environnement cible:
```shell
EXTERNAL_PLUGINS_DIR_HOST_PATH=/home/${user}/plugin/

REFAPP__KEYCLOAK_USER=user
REFAPP__KEYCLOAK_PASS=passwode
REFAPP__URL=https://api-referentiel-applications.com/
REFAPP__KEYCLOAK_CLIENT=client-id
REFAPP__KEYCLOAK_URL=https://sso-referentiel-applications.com/
```
6. Run la console et vérifier que ce nouveau plugin est installé au moment de l'initialisation de la console.
```shell
dso-console_server  | [15/04/2025 - 13:11:16 UTC] INFO: Server listening at http://0.0.0.0:8080
dso-console_server  | Plugin refapp registered at upsertProject:pre deleteProject:main ## ici le plugin refapp vient bien d'être pris en charge
```
### en mode production
1. Recupérer le tag de la version qui vous intéresse dans la section ***Releases*** du [repository](https://github.com/cloud-pi-native/console-plugin-refapp/releases).
2. Ajouter la release tag dans l'initContainer des values du projet  [helm-chartes](https://github.com/cloud-pi-native/helm-charts/blob/main/charts)
   1. Ajouter le .zip de la [release](https://github.com/cloud-pi-native/console-plugin-refapp/archive/refs/tags/v0.0.1.zip) cible dans le tableau des [plugins](https://github.com/cloud-pi-native/helm-charts/blob/main/charts/dso-console/values.yaml#L431)
   2. Ajouter la liste des variables d'environnement comme [secrets](https://github.com/cloud-pi-native/helm-charts/blob/main/charts/dso-console/values.yaml#L27)

## Important:
* Le code généré Api.ts doit être adapté après l'utilisation du package swagger-typescript-api du fait que la documentation ne remonte pas les responses http, par example.
* Point de vigilance aussi sur la nécessité d'avoir un user en db qui a les permission write pour consommer l'api. ***Cette action est malheureusement manuel.***
