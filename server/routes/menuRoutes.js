import express from 'express';
import { getAllMenus,createMenu } from '../controllers/menuController.js';
import {getMenuItems,createMenuItem } from '../controllers/menuItemsController.js';

const router = express.Router();

router.route('/getAllMenus').get(getAllMenus)
router.route('/createMenu').post(createMenu)
router.route('/getMenuItems/:menuId').get(getMenuItems)
router.route('/createMenuItem').post(createMenuItem)


export default router;