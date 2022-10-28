const createOne = async (model, data) => {
    return await model.create({ ...data });
  },
  retrieveMany = async (model, filter) => {
    return await model.findAll({ ...filter });
  },
  retrieveOne = async (model, filter) => {
    return await model.findOne({ ...filter });
  },
  updateOne = async (model, data, filter) => {
    return await model.update({ ...data }, { ...filter });
  },
  deleteOne = async (model, filter) => {
    return await model.destroy({ ...filter });
  },
  commonHelper = {
    createOne,
    retrieveMany,
    retrieveOne,
    updateOne,
    deleteOne,
  };
export default commonHelper;
