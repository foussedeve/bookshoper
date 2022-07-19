 const session={
    get: KEY => {
      try {
        const dataString = localStorage.getItem(KEY);
        return {status: true, data: JSON.parse(dataString)};
      } catch (e) {
        return {statut: false, data: e};
      }
    },
    set: (KEY, value) => {
      try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(KEY, jsonValue);
        return {statut: true, data: "Enregistrer avec succès"};
      } catch (e) {
        return {statut: false, data: e};
      }
    },
    remove: (KEY) => {
      try {
        localStorage.removeItem(KEY);
        return {statut: true, data: "Supprimer avec succès"};
      } catch (e) {
        return {statut: false, data: e};
      }
    },
  };
  export default session;