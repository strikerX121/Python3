import { DataTypes } from "sequelize";
import connection from "../configuration/database.config.js";
import patientModel from "../models/patient.model.js";

const guardianModel = connection.define(
  "guardians",
  {
    guardianId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    patientId: {
      type: DataTypes.INTEGER(11),
      references: "patients",
      referencesKey: "patientId",
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    relation: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    updatedAt: true,
    createdAt: true,
  }
);

guardianModel.associate = () => {
  guardianModel.belongsTo(patientModel, {
    as: "patients",
    foreignKey: "patientId",
  });
};

export default guardianModel;
