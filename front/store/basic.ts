import { atom } from "recoil";

export const loginState = atom({
  key: "isLogin",
  default: false,
});

export const navbarState = atom({
  key: "isNavOpen",
  default: true,
});

export const projectIconState = atom({
  key: "isProjectIconShow",
  default: true,
});

export const userDataState = atom({
    key: "data",
    default: {nickname: '', level: 0, slimeColor: '', skills: [''], sendbirdAccessToken: '000088b5-fe00-47ed-a721-782cc1e92e75'}
});

export const projectListState = atom({
  key: "projectList",
  default: [] as any[],
});

export const projectDataState = atom({
  key: "projects",
  default: [
    {name: 'project1', position: {x: 1550, y: 500}, type: 'html', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]},
    {name: 'project2', position: {x: 850, y: 700}, type: 'css', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]},
    {name: 'project3', position: {x: 1300, y: 1000}, type: 'js', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]}
],
});