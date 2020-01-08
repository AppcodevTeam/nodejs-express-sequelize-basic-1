// get all user
exports.getAllUserList = (req, res) => {
  const demoUserList = [
    {
      id: 1,
      username: "Abc EEQ",
      email: "abc.e@mail.com"
    },
    {
      id: 2,
      username: "Bloo QUP",
      email: "bloo.q@mail.com"
    },
    {
      id: 3,
      username: "Csse AAO",
      email: "csse.a@mail.com"
    }
  ]

  res.json(demoUserList)
}
