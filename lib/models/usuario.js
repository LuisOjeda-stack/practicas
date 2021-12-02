import { Model, DataTypes } from 'sequelize';


export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        idRol: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelname: 'Usuario',
      }
    );
  }
}