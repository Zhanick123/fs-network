import { response } from "express";
import { Router } from "express";
import path from "path";
import { getDataFromFile } from "../utils/workWithData.js"
const router = Router();

router.get("/", (req, res) => {
  //   res.send("Hello from express!");
  // res.sendFile(path.resolve("pages", "home.html"));
  res.render("home", { title: "From server" })
});

router.get("/partners", (req, res) => {
  res.sendFile(path.resolve("pages", "partners.html"));
});

router.get("/news", async (req, res) => {
  const data = await getDataFromFile("news")
  res.render("news", { news: data })
});

router.get("/news/create", async (req, res) => {
  res.render("form")
})
router.get("/news/:itemId", async (req, res) => {
  const { itemId } = req.params;

  const data = await getDataFromFile("news")

  const newsElement = data.find(elem => elem.id === itemId)
  res.render("newsElement", { newsElement });
});
export default router;
