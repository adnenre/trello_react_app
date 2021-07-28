import { uniqID } from "./utility";

let columns = [
  {
    id: uniqID(),
    order: 1,
    title: "To Do",
    tasks: [
      { id: uniqID(), columnTitle: "To Do", desc: "task six", order: 1 },
      { id: uniqID(), columnTitle: "To Do", desc: "task seven", order: 2 },
      { id: uniqID(), columnTitle: "To Do", desc: "task nine", order: 3 },
    ],
  },
  {
    id: uniqID(),
    order: 2,
    title: "in Progress",
    tasks: [
      { id: uniqID(), columnTitle: "In Progress", desc: "task one", order: 1 },
      { id: uniqID(), columnTitle: "In Progress", desc: "task twp", order: 2 },
      {
        id: uniqID(),
        columnTitle: "In Progress",
        desc: "task three",
        order: 3,
      },
    ],
  },
  {
    id: uniqID(),
    order: 3,
    title: "Done",
    tasks: [
      { id: uniqID(), columnTitle: "Done", desc: "task four", order: 1 },
      { id: uniqID(), columnTitle: "Done", desc: "task five", order: 2 },
      { id: uniqID(), columnTitle: "Done", desc: "task ten", order: 3 },
    ],
  },
  {
    id: uniqID(),
    order: 4,
    title: "test",
    tasks: [],
  },
];

export default columns;
