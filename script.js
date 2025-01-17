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


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulation de validation des champs
    const email = form.querySelector('input[name="email"]').value;
    const password = form.querySelector('input[name="password"]').value;

    if (!email || !password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Simulation du login réussi
    show2FAModal();
  });

  function show2FAModal() {
    // Création du modal pour le 2FA
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    modalContent.innerHTML = `
      <h2>Authentification à deux facteurs</h2>
      <p>Veuillez entrer le code envoyé à votre email.</p>
      <form id="2fa-form">
        <label>
          Code 2FA
          <input type="text" name="2fa-code" placeholder="123456" maxlength="6" required/>
        </label>
        <button type="submit">Vérifier</button>
        <button type="button" id="cancel-2fa">Annuler</button>
      </form>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const twoFaForm = document.getElementById('2fa-form');
    const cancel2FA = document.getElementById('cancel-2fa');

    twoFaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const code = twoFaForm.querySelector('input[name="2fa-code"]').value;

      if (code === '123456') { // Code simulé pour validation
        alert('Connexion réussie !');
        document.body.removeChild(modal);
      } else {
        alert('Code incorrect. Veuillez réessayer.');
      }
    });

    cancel2FA.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }
});
