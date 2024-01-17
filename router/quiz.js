const quizController = require("../controllers/quiz");
const router = require("express").Router();

const { verifyToken } = require("../middlewares/authJwt");

router.get("/", [verifyToken], quizController.getAll);
router.get("/:id", [verifyToken], quizController.findOne);
router.post("/", [verifyToken], quizController.create);
router.put("/:id", [verifyToken], quizController.update);
router.delete("/:id", [verifyToken], quizController.delete);
router.get("/category/:id", [verifyToken], quizController.getByCategoryId);
router.get("/level/:id", [verifyToken], quizController.getByLevelId);

module.exports = router;
