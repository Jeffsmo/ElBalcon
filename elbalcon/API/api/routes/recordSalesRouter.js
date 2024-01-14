const express=require('express');
const RecordSalesService=require('../services/recordSalesServices');
const validatorHandler=require('../httpErrors/validatorHandler');
const{ updateRecordSalesSchema,  createRecordSalesSchema,   getRecordSalesSchema}=require('../DTO/recordSalesSchema');


const router=express.Router();
const service=new RecordSalesService();



router.get('/',async(req,res,next)=>{
  try{
      const users=await service.find();
      res.json(users);}catch(error){next(error);
      }});


router.get('/:id',
    validatorHandler(getRecordSalesSchema,'params'),
    async(req,res,next)=>{
      try{
        const{id}=req.params;
        const category=await service.findOne(id);
        res.json(category);}catch(error){next(error);}});



router.post('/',
        validatorHandler(createRecordSalesSchema,'body'),
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
        validatorHandler(getRecordSalesSchema,'params'),
        validatorHandler(updateRecordSalesSchema,'body'),
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

  router.delete('/:id', validatorHandler(getRecordSalesSchema,'params'),

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
