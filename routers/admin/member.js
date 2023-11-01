import express from "express";
import Member from "../../models/member.js";

const router = express.Router();


router.get('/', (req, res)=> {
    Member.findAll().then((results)=>{
        res.render('admin/member/index', {Member:results, user:req.session.user || ""})
    })
})

router.get('/create', (req, res)=>{
    res.render('admin/member/create')
})
router.get('/edit/:id', (req, res)=>{
    Member.findOne({where:{id:req.params.id}}).then((results)=>{
        res.render('admin/member/edit', {Member:results})
    })
})

export default router;