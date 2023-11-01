import express from 'express';
import Member from './models/member.js'
import session from 'express-session'

import root_router from './routers/root.js';
import admin_router from './routers/admin.js'

import permit from './controllers/auth.js';


const app = express();
const hostname = ('root');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: 'ini adalah kode secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60*60*1000}
}))

app.set('view engine','ejs')

app.use('/', root_router);
app.use('/basic', root_router)
app.use('/bmi', root_router)
app.use('/temperature', root_router)
app.use('/admin', permit('admin'), admin_router);


app.listen(port, ()=>{
    console.log(`Server running at ${hostname}:${port}`);
 });