const TodoTask = [
  {
    taskName: 'test test',
    score: 6,
    progress: 4,
    isCompleted: false
  },
  {
    taskName: 'test111',
    score: 3,
    progress: 2,
    isCompleted: false
  }, {
    taskName: 'testhi',
    score: 8,
    progress: 5,
    isCompleted: false
  },
];

const CompletedTask = [
  {
    taskName: 'heeee',
    score: 3,
    progress: 3,
    isCompleted: true,
    completedTimestamp: new Date('2020/12/30').getTime(),
    completedDate: '2020/12/30',
  },
  {
    taskName: 'diudiu',
    score: 10,
    progress: 10,
    isCompleted: true,
    completedTimestamp: new Date('2021/1/3').getTime(),
    completedDate: '2021/1/3',
  },
  {
    taskName: 'testing',
    score: 2,
    progress: 2,
    isCompleted: true,
    completedTimestamp: new Date('2021/1/4').getTime(),
    completedDate: '2021/1/4',
  },
  {
    taskName: 'test123',
    score: 7,
    progress: 7,
    isCompleted: true,
    completedTimestamp: new Date('2021/1/4').getTime(),
    completedDate: '2021/1/4',
  },
  {
    taskName: 'hey',
    score: 5,
    progress: 5,
    isCompleted: true,
    completedTimestamp: new Date('2021/1/4').getTime(),
    completedDate: '2021/1/4',
  },
  {
    taskName: 'hihey',
    score: 6,
    progress: 6,
    isCompleted: true,
    completedTimestamp: new Date('2021/1/5').getTime(),
    completedDate: '2021/1/5',
  },
  {
    taskName: 'hello',
    score: 1,
    progress: 1,
    isCompleted: true,
    completedTimestamp: new Date('2021/1/6').getTime(),
    completedDate: '2021/1/6',
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