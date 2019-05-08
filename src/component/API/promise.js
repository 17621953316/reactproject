import ajax from './ajax'

//注册接口
export const Login = ({userName,password}) => ajax("/login",{userName,password},'POST')
