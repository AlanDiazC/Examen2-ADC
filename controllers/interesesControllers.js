const mongoose = require("mongoose");

const dbLugares = require("../models/lugaresModel.js");

exports.getLugares = async (req, res) => {
  const lugar = await dbLugares.find();
  console.log(lugar);
  res.json(lugar);
};

exports.postLugares = async (req, res) => {
  const buscado = await dbLugares.find({
    lugarInteres: req.body.lugarInteres,
  });
  if (buscado[0]) {
    const interes = buscado[0].contadorInteres + 1;
    dbLugares
      .updateOne(
        { lugarInteres: req.body.lugarInteres },
        {
          $set: {
            contadorInteres: interes,
          },
        }
      )
      .then(res.json({ estado: "interes aumentado" }));
  } else {
    const lugar = await new dbLugares({
      lugarInteres: req.body.lugarInteres,
      pais: req.body.pais,
      atractivo: req.body.atractivo,
      contadorInteres: req.body.contadorInteres,
    });
    lugar.save().then((lugarRes) => {
      console.log("Lugar de interes agregado");
      res.json(lugarRes);
    });
  }
};

exports.modificarLugares = async (req, res) => {
  try {
    if (req.body.contadorInteres) {
      dbLugares
        .updateOne(
          { lugarInteres: req.body.lugarInteresBuscado },
          {
            $set: {
              contadorInteres: req.body.contadorInteres,
            },
          }
        )
        .then(console.log("Interes actualizado"));
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
        .then(console.log("Pais actualizado"));
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
        .then(console.log("Atractivo actualizado"));
    }
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
        .then(console.log("Lugar actualizado"));
    }
    res.json({ estado: "aceptado" });
  } catch {
    res.json({ estado: "fallido" });
  }
};

exports.borrarLugares = async (req, res) => {
  dbLugares
    .deleteOne({
      lugarInteres: req.body.lugarInteres,
    })
    .then(() => {
      console.log("Lugar eliminado");
      res.json({ estado: "aceptado" });
    });
};
