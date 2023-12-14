const ApiError = require("../error/ApiError");
class userController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    // res.json("alles OK");
    // const query = req.query;
    // res.json(query);
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }
}
module.exports = new userController();
