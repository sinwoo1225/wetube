import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.home, (req,res)=>res.send("video index"));
videoRouter.get(routes.upload, (req,res)=>res.send("video upload"));
videoRouter.get(routes.videoDetail, (req,res)=>res.send("video Detail"));
videoRouter.get(routes.editVideo, (req,res)=>res.send("video edit"));
videoRouter.get(routes.deleteVideo, (req,res)=>{res.send("video delete")});
export default videoRouter;