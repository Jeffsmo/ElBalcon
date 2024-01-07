const express=require('express');
const MenuService=require('../services/menuServices');
const validatorHandler=require('../httpErrors/validatorHandler');
const{updateMenuSchema, createMenuSchema,  getMenuSchema}=require('../DTO/menuSchema');


const router=express.Router();
const service=new MenuService();



router.get('/',async(req,res,next)=>{
  try{
      const users=await service.find();
      res.json(users);}catch(error){next(error);
      }});


router.get('/:id',
    validatorHandler(getMenuSchema,'params'),
    async(req,res,next)=>{
      try{
        const{id}=req.params;
        const category=await service.findOne(id);
        res.json(category);}catch(error){next(error);}});



router.post('/',
        validatorHandler(createMenuSchema,'body'),
        async(req,res,next)=>{
          try
          {
            const body=req.body;
            const newCategory=await service.create(body);
            res.status(201).json(newCategory);
          }
          catch(error)
          {
            next(error);
          }});
router.patch('/:id',
        validatorHandler(getMenuSchema,'params'),
        validatorHandler(updateMenuSchema,'body'),
        async(req,res,next)=>{

          try
          {
            const{id}=req.params;
            const body=req.body;
            const category=await
            service.update(id,body);
            res.json(category);
          }
            catch(error)
          {
            next(error);
            }
          });

  router.delete('/:id', validatorHandler(getMenuSchema,'params'),

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
