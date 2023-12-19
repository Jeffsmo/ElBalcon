const express=require('express');
const ImageService=require('../services/imageServices');
const validatorHandler=require('../httpErrors/validatorHandler');
const{ updateImageSchema,  createImageSchema,   getImageSchema}=require('../DTO/imageSchema');
const multer = require('multer');
const path = require('path');



const router=express.Router();
const service=new ImageService();



router.get('/',async(req,res,next)=>{
  try{
      const users=await service.find();
      res.json(users);}catch(error){next(error);
      }});



router.get('/:id',
validatorHandler(getImageSchema,'params'),
async(req,res,next)=>{
  try{
    const{id}=req.params;
    const category=await service.findOne(id);
    res.json(category);}catch(error){next(error);}});

const imageFilter = (req,file,cb) =>{
  if(file.mimetype.startsWith("image")){
    cb(null,true);
  }else{
    cb("Please upload only images", false)
  }
}

// función de almacenamiento fuera de la definición de la ruta
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/img/uploads'),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Configura multer con la función de almacenamiento
const upload = multer({ storage , fileFilter:imageFilter});

router.post(
  '/upload',
  upload.single('image'), // Utiliza upload.single para manejar un solo archivo
  validatorHandler(createImageSchema, 'body'), // Asegúrate de pasar el esquema y el contexto correctos
  async (req, res, next) => {
    try {
      console.log(req.file);

      if (!req.file) {
        return res.status(400).send('You must select a file');
      }

      // Utiliza el servicio para crear la imagen
      const result = await service.create({
        typeImage: req.file.mimetype,
        name: req.file.originalname
      });

      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);


router.get('/:id',
    validatorHandler(getImageSchema,'params'),
    async(req,res,next)=>{
      try{
        const{id}=req.params;
        const image=await service.findOne(id);
        res.json(image);}catch(error){next(error);}});



// router.post('/upload',
//         validatorHandler(createImageSchema,'body'),
//         async(req,res,next)=>{
//           try
//           {
//             const body=req.body;
//             const newCategory=await service.create(body);
//             res.status(201).json(newCategory);
//           }
//           catch(error)
//           {
//             next(error);
//           }});
router.patch('/:id',
        validatorHandler(getImageSchema,'params'),
        validatorHandler(updateImageSchema,'body'),
        async(req,res,next)=>{

          try
          {
            const{id}=req.params;
            const body=req.body;
            const image=await
            service.update(id,body);
            res.json(image);
          }
            catch(error)
          {
            next(error);
            }
          });

  router.delete('/:id', validatorHandler(getImageSchema,'params'),

  async(req,res,next)=>{
      try{
        const{id}=req.params;
        await service.delete(id);
        res.status(201).json({id});
    }
      catch(error)
      {
        next(error);
      }
      });
module.exports=router;
