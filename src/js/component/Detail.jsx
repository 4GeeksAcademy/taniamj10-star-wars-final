import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [detail, setDetail] = useState({});

  const search = () => {
    let searchDetail = store.characters
      .concat(store.planets)
      .find((item) => item._id === params.id);
    setDetail(searchDetail);
  };

  useEffect(() => {
    search();
  }, [store.characters, store.planets]);

  return (

    <div className="d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "540px" }} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body text-dark">
              <h5 className="card-title">{detail?.properties?.name}</h5>
              <p className="card-text">{detail?.properties?.gender}</p>
              <p className="card-text">{detail?.properties?.eye_color}</p>
              <p className="card-text">{detail?.properties?.birth_year}</p>
              <p className="card-text">{detail?.properties?.height}</p>
              <p className="card-text">{detail?.properties?.climate}</p>
              <p className="card-text">{detail?.properties?.diameter}</p>
              <p className="card-text">{detail?.properties?.population}</p>
              <p className="card-text">{detail?.properties?.terrain}</p>
              <p className="card-text"><small className="text-muted">star wars </small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;




