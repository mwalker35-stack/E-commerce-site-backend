const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll(req.params.id, {
      include: [{ model: Product, through: ProductTag }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try { 
    const updatedTag =await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updatedTag)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deletedTagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if(!tagData){
      res.status(400).json({mesage: 'No tag with that id found'})
    }
    res.status(200).json(deletedTagData)
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
