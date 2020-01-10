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
Mock.mock('/user/info', 'post', (data) => {
  return {
    code: 200,
    data: {
      'userName': '沉在水底的鱼',
      'avatar': 'http://123.png',
      'introduction': '管理委员会成员',
      'roles': ['admin']
    }
  }
})
