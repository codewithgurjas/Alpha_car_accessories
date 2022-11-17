const express = require("express");
const router = express.Router();


const categoryController = require('../controllers/categoryController');


// router.get("/", category_controller.index);

//router.get('/category',category_controller.categoryRead);

router.get('/tocreatecategory', categoryController.createPage);
router.get('/todeletecategory', categoryController.deletePage);
router.get('/toupdatecategory', categoryController.updatePage);

router.post('/category/create', categoryController.insertCategory);

router.get('/', categoryController.readCategory);
router.get('/category/readById/:id', categoryController.readCategoryById);
router.delete("/category/delete/:id", categoryController.deleteCategory);
router.patch("/category/update/:id", categoryController.updateCategory);

module.exports=router;