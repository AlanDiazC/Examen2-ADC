const mongoose = require("mongoose");

mongoose
  .connect("mongodb://user8:root@54.173.202.133:27017/base8?authSource=admin")
  .then(() => console.log("Conexion exitosa"))
  .catch((err) => console.log(err));

const InteresPais_Ex_A01748150 = mongoose.Schema({
  lugarInteres: {
    type: String,
    required: true,
    unique: true,
  },
  pais: {
    type: String,
    required: true,
  },
  atractivo: {
    type: String,
    required: true,
  },
  contadorInteres: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "InteresPais_Ex_A01748150",
  InteresPais_Ex_A01748150
);
