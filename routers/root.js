import express from "express";
import member_controller from '../controllers/member.js'

const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {user:req.session.user||""})
});

router.get('/basic', (req, res)=>{
    res.render('basic', {user:req.session.user||""})
})

router.get('/bmi', (req, res)=>{
    res.render('bmi', {user:req.session.user||""})
})

router.get('/temperature', (req, res)=>{
    res.render('temperature', {user:req.session.user||""})
})

router.get('/forbidden', (req, res)=>{
    res.render('forbidden', {user:req.session.user||""})
});

router.get('/login', member_controller.login);
router.get('/logout', member_controller.logout);
router.post('/login', member_controller.auth);


export default router;