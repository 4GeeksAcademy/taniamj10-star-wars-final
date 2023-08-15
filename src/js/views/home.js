import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-danger">Characters</h1>
        <div className="my-carousel">
          {store.characters.map((item) => {
            return (
              <div className="my-card" key={item._id}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="my-body-text">
                  <h3>{item.properties.name}</h3>
                  <p>
                    <strong>Gender: {item.properties.gender}</strong>
                  </p>
                  <p>
                    <strong>Hair color: {item.properties.hair_color}</strong>
                  </p>
                  <p>
                    <strong>Eye-Color: {item.properties.eye_color}</strong>
                  </p>
                </div>
                <div className="my-footer">
                  <Link
                    to={`/characters/${item._id}`}
                    className="btn btn-outline-primary"
                  >
                    Learn more!
                  </Link>
                  <button className="btn btn-outline-danger"><i className="fa fa-heart text-danger" /></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-danger">Planets</h1>
        <div className="my-carousel">
          {store.planets.map((item) => {
            return (
              <div className="my-card" key={item._id}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="my-body-text">
                  <h3>{item.properties.name}</h3>
                  <p>
                    <strong>Population: {item.properties.population}</strong>
                  </p>
                  <p>
                    <strong>Terrain: {item.properties.terrain}</strong>
                  </p>
                </div>
                <div className="my-footer">
                  <Link
                    to={`/planets/${item._id}`}
                    className="btn btn-outline-primary"
                  >
                    Learn more!
                  </Link>
                  <button className="btn btn-outline-danger"><i className="fa fa-heart text-danger" /></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
