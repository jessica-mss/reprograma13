const mongoose = require("mongoose");

petsSchema = new mongoose.Schema({
    id: { type: Number },
    nomeFantasia: { type: String },
    endereco: { type: String },
    telefone: { type: String },
    atende: { type: Array }
}, {
    versionKey: false
});

petsSchema.virtual('especialidade').
    get(function () {
        return this.nomeFantasia + '-' + this.atende;
    }).
    set(function (especialidade) {
        this.nomeFantasia = especialidade.substr(0, especialidade.indexOf('-'));
        this.atende = especialidade.substr(especialidade.indexOf('-') + 1);
    });

const pets = mongoose.model("pets", petsSchema);

module.exports = pets;