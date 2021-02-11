const router = require('express').Router();
const pcRepository = require('./pc');

router.get('/', async (req, res) => {
  try {
    const list = await pcRepository.find();
    res.send(list);
  } catch (err) {
    res.json({ error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const pc = await pcRepository.findById(id);
    res.send(pc);
  } catch (err) {
    res.json({ error: err });
  }
});

router.delete('/one/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const pc = await pcRepository.findByIdAndDelete(id);
    res.send(pc);
  } catch (err) {
    res.json({ error: err });
  }
});

router.delete('/all', async (req, res) => {
  try {
    const list = await pcRepository.deleteMany({});
    res.send(list);
  } catch (err) {
    res.json({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const newPc = await pcRepository.create(req.body);
    res.send(newPc);
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;