import { DataTypes } from "sequelize";
import connection from "../configuration/database.config.js";

const patientModel = connection.define("patients", {
    patientId: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    dob:{
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue : DataTypes.NOW
    },
});

export default patientModel;
