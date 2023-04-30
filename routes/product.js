const router = require("express").Router();
const productController = require('../controllers/productController')
const userController = require('../controllers/UserController')

router.post("/products", productController.product_create);
router.get("/products", productController.product_all);
router.get("/products", productController.product_details);
router.put("/products:productId", productController.product_update);
router.delete("/products:productId", productController.product_delete);
router.post("/user", userController.user_create);
router.post("/user/login", userController.user_login);
router.post("/user/forgetPass", userController.user_forgot_pass);

module.exports = router;