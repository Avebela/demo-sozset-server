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
      res.status(500).json(e.message);
      //   next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("id не указан");
        // res.status(400).json({ message: "id не указан" });
      }
      //  const types = await Type.findByPk(id);
      const types = await Type.findOne({ where: { id } });
      return res.json(types);
    } catch (e) {
      res.status(500).json(e.message);
      //  next(ApiError.badRequest(e.message));
    }
  }

  async update(req, res) {
    try {
      const { id, name } = req.body;
      if (!id) {
        throw new Error("id не указан");
      }

      const updetedPost = await Type.update(
        // { name: name },
        // { where: { id: id } }
        { name },

        { where: { id } }
        // { new: true }
      );
      return res.json(updetedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("id не указан");
      }

      const type = await Type.destroy(
        //(id);
        {
          where: { id },
        }
      );

      return res.json(type);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
module.exports = new typeController();
