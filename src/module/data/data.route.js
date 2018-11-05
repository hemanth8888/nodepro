import Router from "express";
import * as dataController from "./data.controller";
const router = new Router();

router.post("/addData", dataController.dataAdd);
router.get("/dataList", dataController.dataList);
router.get("/single-data/:id",dataController.singleData);
export default router;