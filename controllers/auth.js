const User = require("../models/user");

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  user
    .find()
    .then((user) => {
      console.log("user", user);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.register = (req, res, next) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    first_name,
    last_name,
    email,
    password,
  });
  user
    .save()
    .then((result) => {
      // console.log(result);
      console.log("Created User");
      res.send(result).status(201);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = (req, res, next) => {
  User.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then((user) => {
      console.log(user);
    })
    .catch((err) => console.log(err));
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByIdAndRemove(prodId)
//     .then(() => {
//       console.log('DESTROYED PRODUCT');
//       res.redirect('/admin/products');
//     })
//     .catch(err => console.log(err));
// };
