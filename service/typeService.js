const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class typeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });
      return res.json(type);
      //console.log(name);
      //res.json("OK");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async getOne(req, res) {}
}
module.exports = new typeController();
