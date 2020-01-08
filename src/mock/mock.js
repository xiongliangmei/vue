import Mock from 'mockjs'

Mock.mock('/user/login', 'post', (data) => {
  return {
    code: 200,
    data: {
      'message': 'admin',
      'token': '123'
    }
  }
})
