const registerUser = async (req, res,) => {

      const { _id } = req.user;
        res.json201(_id, "Registered")

  };
  const loginUser = async (req, res,) => {

      const { _id } = req.user;
      const opts = { maxAge: 7 * 24 * 60 * 60 * 1000 };
        res.cookie("token", req.user.token,opts).json200(_id, "Logged in")
  };
  const logoutUser = async (req, res,) => {

    res.clearCookie("token").json200(req.user._id,"Logged out");

  };
  const currentUser = async (req, res,) => {

      res.json200(null,"Is online");

  };
  const badAuth = async (req, res,) => {
    res.json401();
  };
  const forbidden = async (req, res,) => {
    res.json403();
  };

  export { registerUser, loginUser, logoutUser, currentUser, badAuth, forbidden}