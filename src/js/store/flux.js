const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      urlBase: "https://www.swapi.tech/api",
      favorito: [],
    },
    actions: {
      getCharacters: () => {
        // con then
        let store = getStore();

        fetch(`${store.urlBase}/people`)
          .then((response) => response.json())
          .then((data) => {
            for (let person of data.results) {
              fetch(`${store.urlBase}/people/${person.uid}`)
                .then((response) => response.json())
                .then((data) => {
                  setStore({ characters: [...store.characters, data.result] });
                });
            }
          })
          .catch((error) => console.log(error));
      },
      getPlanets: async () => {
        // con async await
        let store = getStore();
        let response = await fetch(`${store.urlBase}/planets`);
        let data = await response.json();
        for (let planet of data.results) {
          let response = await fetch(`${store.urlBase}/planets/${planet.uid}`);
          let data = await response.json();
          setStore({ planets: [...store.planets, data.result] });
        }
      },
      guardarFavoritos(nombre) { 
        const store= getStore();
        const favoritos= store.favorito ;
        // store.favorito se guada dentro de favoritos 
        const newfavoritos= [...favoritos,{name:nombre, id:favoritos.length } ]
        setStore({favorito:newfavoritos})
      }

      
    },
  };
};

export default getState;
