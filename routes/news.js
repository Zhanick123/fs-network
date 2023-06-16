import { Router } from "express";
import path from "path";
import { v4 as uuid } from "uuid";

import { getDataFromFile, writeDataToFile } from "../utils/workWIthData.js";
import News from "../models/News.js"
const router = Router();

router.get("/", async(req, res) => {
    const news = await News.find()

    res.status(200).send({news})
});

router.post("/", async (req, res) => {
  try {
    const { title, text } = req.body || {};

    if (!title) throw new Error("There is no any title :(");
    if (!text) throw new Error("There is no any text :(");

    const newNews = new News({title,text})

    await newNews.save()

    res.status(200).json({ result: "News has been added!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// news/1
// news/:newsId

router.delete("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;

      await News.deleteOne({_id: itemId})

    res.status(200).json({ result: "News has been removed!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Реализовать метод изменения PUT принимает обязательно title text  +  param itemId
// обновляет элемент в массиве и его перезаписывает (нельзя удалить идентификатор этого элемента)
// .map   оператор спред

// MVC
// MODEL
// VIEW
// CONTROLLER

router.put("/:itemId", async (req, res) => {
  try {
    const { itemId } = req.params;

    const { title, text } = req.body;

    if (!title) throw new Error("There is no any title :(");
    if (!text) throw new Error("There is no any text :(");

    await News.updateOne({_id:itemId}, {title,text})

    res.status(200).json({ result: "News has been changed!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
