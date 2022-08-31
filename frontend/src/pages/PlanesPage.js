import React from "react";

const PlanesPage = (props) => {
  return (
    <main className="holder">
      <div className="art">
        <h2>¿Que te gustaria aprender?.</h2>
        <p>Estas son nuestras carreras:</p>
      </div>
      <div className="contiene">
        <div className="carreras">
          <div className="piano">
            <div>
              <img
                src="img/pianovertical.jpg"
                alt="piano"
                height="540"
                width="360"
              />
            </div>
            <div className="text">
              <h3>Piano</h3>
              <hr></hr>
              <p>Estas son las clases de piano</p>
            </div>
          </div>

          <div className="cuerdas">
            <div>
              <img
                src="img/contrabajovertical.jpg"
                alt="cuerdas"
                height="540"
                width="360"
              />
            </div>
            <div className="text">
              <h3>Cuerdas</h3>
              <hr></hr>
              <p>Todo tipo de cuerdas</p>
            </div>
          </div>
          <div className="vientos">
            <div>
              <img
                src="img/vientos.jpg"
                alt="vientos"
                height="540"
                width="360"
              />
            </div>
            <div className="text">
              <h3>Vientos</h3>
              <hr></hr>
              <p>Intrumentos de Viento</p>
            </div>
          </div>
          <div className="percusion">
            <div>
              <img
                src="img/percusion2.jpg"
                alt="percusion"
                height="540"
                width="360"
              />
            </div>
            <div className="text">
              <h3>Percusión</h3>
              <hr></hr>
              <p>Timbales</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PlanesPage;
