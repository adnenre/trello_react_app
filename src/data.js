import { uniqID } from "./utility";

let columns = [
  {
    id: uniqID(),

    title: "To Do",
    tasks: [
      { id: uniqID(), columnTitle: "To Do", desc: "task six" },
      { id: uniqID(), columnTitle: "To Do", desc: "task seven" },
      { id: uniqID(), columnTitle: "To Do", desc: "task nine" },
    ],
  },
  {
    id: uniqID(),

    title: "in Progress",
    tasks: [
      { id: uniqID(), columnTitle: "In Progress", desc: "task one" },
      { id: uniqID(), columnTitle: "In Progress", desc: "task twp" },
      {
        id: uniqID(),
        columnTitle: "In Progress",
        desc: "task three",
      },
    ],
  },
  {
    id: uniqID(),

    title: "Done",
    tasks: [
      { id: uniqID(), columnTitle: "Done", desc: "task four" },
      { id: uniqID(), columnTitle: "Done", desc: "task five" },
      { id: uniqID(), columnTitle: "Done", desc: "task ten" },
    ],
  },
  {
    id: uniqID(),

    title: "test",
    tasks: [],
  },
];

export default columns;
