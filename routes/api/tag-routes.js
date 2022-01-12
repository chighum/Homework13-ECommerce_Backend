const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(allTags);
  } catch {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tag);
  } catch {
    res.status(400).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({ where: req.params.id });
    if (!tag) {
      res.status(400).json({ message: "No tag found with that ID!" });
      return;
    }
    res.status(200).json(tag);
  } catch {
    res.status(400).json(err);
  }
});

module.exports = router;
