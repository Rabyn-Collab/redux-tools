


const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
];


module.exports.getAllProduct = (req, res) => {
  return res.send('kjhkj');
}



module.exports.createProduct = (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
      message: `successfully registered`
    });

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }
}