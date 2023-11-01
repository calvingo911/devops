import express from "express";
import Member from "../models/member.js";
import admin_member_router from './admin/member.js'
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('admin/index', {user: req.session.user||""})
})
router.use('/member', admin_member_router);

router.get('/api/members', (req, res)=>{
    Member.findAll().then((results)=>{
        let data = {
            status: 200,
            error: null,
            response: results,
        }; 
        res.json(data);
    })
})

router.post('/api/member', (req, res)=>{
    Member.create({
        name: req.body.name,
        password: req.body.password,
        active: req.body.active,
        role: req.body.role
    }).then((results)=> {
        res.json({status:200, error:null, res: results})
    })
})

router.put('/api/member/:id', (req, res)=>{
    Member.update({
        name: req.body.name,
        password: req.body.password,
        active: req.body.active,
        role: req.body.role
    }, {where: {id: req.params.id}}
    ).then((results)=> {
        res.json({status:200, error:null, res: results})
    })
})

router.delete('/api/member/:id', (req, res)=>{
    Member.destroy({where: {id: req.params.id}}).then((results)=> {
        res.json({status:200, error:null, response: results})
    });
})

export default router;