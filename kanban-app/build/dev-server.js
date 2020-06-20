const bodyParser = require('body-parser')

module.exports = app => {
  app.use(bodyParser.json())

  const users = {
    'foo@domain.com': {
      password: '12345678',
      userId: 1,
      token: '1234567890abcdef'
    }
  }

  app.post('/auth/login', (req, res) => {
    const {
      email,
      password
    } = req.body
    const user = users[email]

    if (user) {
      if (user.password !== password) {
        res.status(401).json({ message: '로그인에 실패했습니다.' })
      } else {
        res.json({ ...user })
      }
    } else {
      res.status(404).json({ message: '등록된 사용자가 아닙니다' })
    }
  })
}
