// 当前这个模块：API进行统一管理
import requests from "./ajax";

// 注册
export const reqUserRegister = (data)=>requests({url:'/manager',data,method:'post'});

//登录
export const reqUserLogin = (data) => requests({ url: '/managerlogin', data, method: 'post' });


// 查询所有图书信息
export const reqBook = () => requests({ url: '/list', method: 'post' });

// 添加图书
export const reqAddBook = (data) => requests({ url: '/add',data, method: 'post' });

// 删除图书
export const reqDeleteBook = (id) => requests({ url: `/delete/${id}`, method: 'post' });

// 修改图书
export const reqUpdateBook = (data) => requests({ url: '/update',data, method: 'post' });

// 根据id查询图书
export const reqBookId = (id) => requests({ url: `/preUpdate/${id}`, method: 'post' });

// 动态查询图书
export const reqBook2 = () => requests({ url: '/list2', method: 'post' });

// 根据姓名查询图书
export const reqBookName = (name) => requests({ url: `/query/${name}`, method: 'post' });

// 随机显示
export const reqRandomBook = () => requests({ url: '/randomlist', method: 'get' });