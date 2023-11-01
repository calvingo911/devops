import Member from "../models/member.js";

const login = (req, res, next) => {
  let message = req.session.err || "";
  let user = req.session.err || "";
  req.session.err = "";
  res.render("login", { user, message });
};

const logout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
};

const auth = (req, res, next) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };
  Member.findOne({ where: { name: data.name } })
    .then((results) => {
      if (!results) {
        req.session.err = "Incorrect username or password";
        res.redirect("/login");
      } else if (data.password != results.password) {
        req.session.err = "Incorrect password";
        res.redirect("/login");
      } else {
        req.session.user = results;
        res.redirect("/");
      }
    })
    .catch((err) => {
      console.log(err);
      req.session.err = "Error Query Database";
      res.redirect("/login");
    });
};
export default { login, logout, auth };
