const TodoTask = [
  {
    taskName: '年後減肥',
    score: 2,
    progress: 1,
    isCompleted: false
  },
  {
    taskName: '閱讀技術文章',
    score: 6,
    progress: 0,
    isCompleted: false
  }, {
    taskName: '小睡覺',
    score: 1,
    progress: 0,
    isCompleted: false
  },
];

const CompletedTask = [
  {
    taskName: '放假前運動',
    score: 3,
    progress: 3,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/9').getTime(),
    completedDate: '2021/2/9',
  },
  {
    taskName: '開工日收心操',
    score: 1,
    progress: 1,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/17').getTime(),
    completedDate: '2021/2/17',
  },
  {
    taskName: '閱讀技術文章',
    score: 8,
    progress: 8,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/18').getTime(),
    completedDate: '2021/2/18',
  },
  {
    taskName: '小睡一下',
    score: 2,
    progress: 2,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/20').getTime(),
    completedDate: '2021/2/20',
  },
  {
    taskName: '看YouTube',
    score: 2,
    progress: 2,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/20').getTime(),
    completedDate: '2021/2/20',
  },
  {
    taskName: '寫code',
    score: 10,
    progress: 10,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/20').getTime(),
    completedDate: '2021/2/20',
  },
  {
    taskName: '整理資料',
    score: 2,
    progress: 2,
    isCompleted: true,
    completedTimestamp: new Date('2021/2/21').getTime(),
    completedDate: '2021/2/21',
  },
];

const DefaultWeek = [
  {
    timestamp: new Date('2020/12/30').getTime(),
    date: '2020/12/30',
    count: 0
  },
  {
    timestamp: new Date('2020/12/31').getTime(),
    date: '2020/12/31',
    count: 0
  },
  {
    timestamp: new Date('2021/1/1').getTime(),
    date: '2021/1/1',
    count: 0
  },
  {
    timestamp: new Date('2021/1/2').getTime(),
    date: '2021/1/2',
    count: 0
  },
  {
    timestamp: new Date('2021/1/3').getTime(),
    date: '2021/1/3',
    count: 0
  },
  {
    timestamp: new Date('2021/1/4').getTime(),
    date: '2021/1/4',
    count: 0
  },
  {
    timestamp: new Date('2021/1/5').getTime(),
    date: '2021/1/5',
    count: 0
  },
]

export default {
  TodoTask,
  CompletedTask,
  DefaultWeek,
}
