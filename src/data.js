import { uniqID } from "./utility";

let columns = {
  "To Do": {
    id: uniqID(),
    title: "Todo",
    tasks: [
      { id: uniqID(), columnTitle: "To Do", desc: "task six" },
      { id: uniqID(), columnTitle: "To Do", desc: "task seven" },
      { id: uniqID(), columnTitle: "To Do", desc: "task nine" },
    ],
  },

  "In Progress": {
    id: uniqID(),
    title: "In Progress",
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
  Done: {
    id: uniqID(),
    title: "Done",
    tasks: [
      { id: uniqID(), columnTitle: "Done", desc: "task four" },
      { id: uniqID(), columnTitle: "Done", desc: "task five" },
      { id: uniqID(), columnTitle: "Done", desc: "task ten" },
    ],
  },
};
export default columns;
