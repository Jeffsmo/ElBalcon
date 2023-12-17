const express=require('express');
const SalesService=require('../services/salesServices');
const validatorHandler=require('../httpErrors/validatorHandler');
const{ updateSalesSchema, createSalesSchema,  getSalesSchema}=require('../DTO/salesSchema');


const router=express.Router();
const service=new SalesService();



router.get('/',async(req,res,next)=>{
  try{
      const users=await service.find();
      res.json(users);}catch(error){next(error);
      }});


router.get('/:id',
    validatorHandler(getSalesSchema,'params'),
    async(req,res,next)=>{
      try{
        const{id}=req.params;
        const category=await service.findOne(id);
        res.json(category);}catch(error){next(error);}});



router.post('/',
        validatorHandler(createSalesSchema,'body'),
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
        validatorHandler(getSalesSchema,'params'),
        validatorHandler(updateSalesSchema,'body'),
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

  router.delete('/:id', validatorHandler(getSalesSchema,'params'),

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
