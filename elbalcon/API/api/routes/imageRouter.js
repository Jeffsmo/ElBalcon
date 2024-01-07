const express = require('express');
const ImageService = require('../services/imageServices');
const validatorHandler = require('../httpErrors/validatorHandler');
const { updateImageSchema, createImageSchema, getImageSchema } = require('../DTO/imageSchema');
const multer = require('multer');
const path = require('path');

const CURRENT_DIR = __dirname;
const router = express.Router();
const service = new ImageService();
const MIMETYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];

const publicPath = path.join(__dirname, '../public/img/uploads');
router.use('/public', express.static(publicPath));

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getImageSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

// FILTRAR LOS TIPOS DE ARCHIVOS QUE SE PUEDEN RECIBIR
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else if (MIMETYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`ONLY ${MIMETYPES.join(' ')} mimetypes are allowed`), false);
  }
};

// función de almacenamiento fuera de la definición de la ruta
const storage = multer.diskStorage({
  destination: path.join(CURRENT_DIR, '../public/img/uploads'),
  limits: {
    fieldSize: 200000,
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Configura multer con la función de almacenamiento
const upload = multer({ storage, fileFilter: imageFilter });

router.post(
  '/upload',
  upload.single('image'),
  validatorHandler(createImageSchema, 'body'),
  async (req, res, next) => {
    try {
      console.log(req.file);

      if (!req.file) {
        return res.status(400).send('You must select a file');
      }

      const result = await service.create({
        typeImage: req.file.mimetype,
        name: req.file.originalname,
        fileName: req.file.filename,
      });

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id', validatorHandler(getImageSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const image = await service.findOne(id);
    res.json(image);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getImageSchema, 'params'), validatorHandler(updateImageSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const image = await service.update(id, body);
    res.json(image);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getImageSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
