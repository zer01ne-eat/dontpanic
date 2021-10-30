import { atom } from 'recoil';

export class UserData {
  nickname: string;
  slimeColor: string;
  level: number;
  isOnline: boolean;
  skills: string[];
  projects: string[];
  sendbirdAccessToken: string;
  positionX: number;
  positionY: number;

  constructor(data: any) {
    this.nickname = data.nickname;
    this.slimeColor = data.slimeColor;
    this.level = data.level;
    this.isOnline = data.isOnline;
    this.skills = data.userSkill;
    this.projects = data.projects;
    this.sendbirdAccessToken = data.sendbirdAccessToken;
    this.positionX = data.positionX;
    this.positionY = data.positionY;
  }
}

export const loginState = atom({
  key: 'isLogin',
  default: false,
});

export const navbarState = atom({
  key: 'isNavOpen',
  default: true,
});

export const projectIconState = atom({
  key: 'isProjectIconShow',
  default: true,
});

export const currentProjectState = atom({
  key: 'currentProject',
  default: '',
});

export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

// export const userDataState = atom({
//   key: 'data',
//   default: new UserData({
//     nickname: '',
//     slimeColor: '',
//     level: -1,
//     isOnline: false,
//     userSkill: [],
//     projects: [],
//     sendbirdAccessToken: '',
//     positionX: 950,
//     positionY: 700,
//   }),
// });

export const userDataState = atom({
  key: 'data',
  default: new UserData({
    nickname: 'sonu',
    slimeColor: '#fea040',
    level: 42,
    isOnline: false,
    userSkill: ['html', 'css', 'javascript'],
    projects: [],
    sendbirdAccessToken: '',
    positionX: 950,
    positionY: 700,
  }),
});

export const projectListState = atom({
  key: 'projectList',
  default: [] as any[],
});

export const projectDataState = atom({
  key: 'projects',
  default: [
    {
      name: 'project1',
      position: { x: 1550, y: 500 },
      type: 'html',
      list: [
        { name: 'Quiz1', marked: 100 },
        { name: 'Quiz2', marked: 10 },
      ],
    },
    {
      name: 'project2',
      position: { x: 850, y: 700 },
      type: 'css',
      list: [
        { name: 'Quiz1', marked: 100 },
        { name: 'Quiz2', marked: 10 },
      ],
    },
    {
      name: 'project3',
      position: { x: 1300, y: 1000 },
      type: 'js',
      list: [
        { name: 'Quiz1', marked: 100 },
        { name: 'Quiz2', marked: 10 },
      ],
    },
  ],
});
