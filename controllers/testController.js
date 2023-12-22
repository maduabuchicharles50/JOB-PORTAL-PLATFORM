const testPostController = (req, res) => {
  const { name } = req.body;
  res.status(200).send(`His name is ${name} `);
};

module.exports = { testPostController };
