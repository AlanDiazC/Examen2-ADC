const mongoose = require("mongoose");

const dbLugares = require("../models/lugaresModel.js");

exports.getLugares = async (req, res) => {
  const lugar = await dbLugares.find();
  console.log(lugar);
  res.json(lugar);
};

exports.postLugares = async (req, res) => {
  const lugar = await new dbLugares({
    lugarInteres: req.body.lugarInteres,
    pais: req.body.pais,
    atractivo: req.body.atractivo,
    contadorInteres: req.body.contadorInteres,
  });
  lugar.save(console.log("Lugar de interes agregado"));
};

exports.modificarLugares = async (req, res) => {
  if (req.body.lugarInteresNuevo) {
    dbLugares
      .updateOne(
        { lugarInteres: req.body.lugarInteresBuscado },
        {
          $set: {
            lugarInteres: req.body.lugarInteresNuevo,
          },
        }
      )
      .then(console.log("Nombre del lugar de interes modificados"));
  }
  if (req.body.pais) {
    dbLugares
      .updateOne(
        { lugarInteres: req.body.lugarInteresBuscado },
        {
          $set: {
            pais: req.body.pais,
          },
        }
      )
      .then(console.log("Pais del lugar de interes modificados"));
  }
  if (req.body.atractivo) {
    dbLugares
      .updateOne(
        { lugarInteres: req.body.lugarInteresBuscado },
        {
          $set: {
            atractivo: req.body.atractivo,
          },
        }
      )
      .then(console.log("Atractivo del lugar de interes modificados"));
  }
};
