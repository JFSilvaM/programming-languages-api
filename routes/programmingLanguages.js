const express = require("express");
const router = express.Router();
const programmingLanguages = require("../services/programmingLanguages");

// GET PROGRAMMING LANGUAGES
router.get("/", async (req, res, next) => {
  try {
    res.json(await programmingLanguages.getMultiple());
  } catch (error) {
    console.error("Error while getting programming languages ", error.message);

    next(error);
  }
});

// GET A PROGRAMMING LANGUAGE
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await programmingLanguages.getSimple(req.params.id));
  } catch (error) {
    console.error("Error while getting a programming language ", error.message);

    next(error);
  }
});

// POST PROGRAMMING LANGUAGE
router.post("/", async (req, res, next) => {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (error) {
    console.error("Error while creating programming language", error.message);

    next(error);
  }
});

// PUT PROGRAMMING LANGUAGE
router.put("/:id", async (req, res, next) => {
  try {
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (error) {
    console.error("Error while updating programming language", error.message);

    next(error);
  }
});

// DELETE PROGRAMMING LANGUAGE
router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await programmingLanguages.remove(req.params.id));
  } catch (error) {
    console.error("Error while deleting programming language", error.message);

    next(error);
  }
});

module.exports = router;
