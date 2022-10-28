import { DataTypes } from "sequelize";
import connection from "../configuration/database.config.js";
import guardianModel from "../models/guardian.model.js";

const patientModel = connection.define(
  "patients",
  {
    patientId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    //Identification
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(["active", "inactive"]),
      allowNull: false,
    },
    //Address
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    zip: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    //Medical
    medicalIssues: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    presentMedicalIssues: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    currentMedication: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    allergies: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    medicalRefferedBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    //coverage
    insuranceCompany: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    policyNumber: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    //Other
    otherRefferedBy: {
      type: DataTypes.STRING(50),
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

patientModel.associate = () => {
  patientModel.belongsTo(guardianModel, {
    as: "guardians",
    foreignKey: "guardianId",
  });
};

export default patientModel;
