const permit = (...permitRoles)=>{
    return (req, res, next)=>{
        let user = req.session.user;
        if (user && permitRoles.includes(user.role))
            next()
        else
            res.redirect('/forbidden')
    }
};

export default permit;
