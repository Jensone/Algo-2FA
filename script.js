// Pseudo-code Authentification avec 2FA


/*
Données :
email = martin@gmail.com
password = 123456
telephone = 0612345678
tentatives = 0
session = 0
minuteur = 0
*/

/*
DÉBUT
RÉCUPÉRER les données de l'UTILISATEUR
    SI "tentatives" > 2
        ALORS 
            BLOQUER le formulaire
            AFFICHER un message d'erreur
            LANCER un "minuteur" de 5 minutes
            REMETTRE les "tentatives" à 0
            FIN
    SINON
        VÉRIFIER l'existence de l'UTILISATEUR avec son email
        SI l'UTILISATEUR n'existe pas
            ALORS
                INCREMENTER "tentatives"
                AFFICHER un message d'erreur
        SINON
            VÉRIFIER le "password"
                SI "password" est incorrect
                    ALORS
                        INCREMENTER "tentatives"
                        AFFICHER un message d'erreur
                SINON
                    LANCER la procédure 2FA
                FIN SI
                
            SI 2FA = FAUX
                ALORS
                    INCREMENTER "tentatives"
                    AFFICHER un message d'erreur
            SINON
                AUTHENTIFIER l'UTILISATEUR
                REDIRIGER l'UTILISATEUR vers une page
                FIN
            FIN SI
        FIN SI
    FIN SI
FIN
*/
