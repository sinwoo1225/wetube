import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try{
    const videos = await Video.find({}); 
    res.render("home", { pageTitle: "Home", videos });
  }catch(error){
    console.log(error);
    res.render("home", { pageTitle: "Home", videos : [] });
  }
};

export const search = (req, res) =>{
    const { term:searchingBy } = req.query;
    res.render("search", { pageTitle: "Search",searchingBy,videos });
}

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) =>{
  const {
    body: { title, description },
    file:{ filename }
  } = req;
  const newVideo = await Video.create({
    fileUrl: filename,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
}

  
export const videoDetail = async (req, res) => {
  const { id } = req.params;
  try{
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video});
  }catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
  
}

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });