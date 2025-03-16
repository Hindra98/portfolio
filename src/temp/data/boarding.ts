
export const sizeCalculator = (b: BoardingItem[]) => {
  let tSize = 0;
  b.forEach(i => tSize +=i?.size);
  return tSize;
}


export const data: BoardingItem[] = [
  {
    id: "1",
    img: "",
    title: "Item1",
    desc: "Une description 1",
    size: 125,
  },
  {
    id: "2",
    img: "",
    title: "Item2",
    desc: "Une description 2",
    size: 225,
  },
  {
    id: "3",
    img: "",
    title: "Item3",
    desc: "Une description 3",
    size: 325,
  },
  {
    id: "4",
    img: "",
    title: "Item4",
    desc: "Une description 4",
    size: 425,
  },
  {
    id: "5",
    img: "",
    title: "Item5",
    desc: "Une description 5",
    size: 525,
  },
  {
    id: "6",
    img: "",
    title: "Item6",
    desc: "Une description 6",
    size: 625,
  },
  {
    id: "7",
    img: "",
    title: "Item7",
    desc: "Une description 7",
    size: 725,
  },
  {
    id: "8",
    img: "",
    title: "Item8",
    desc: "Une description 8",
    size: 825,
  },
  {
    id: "9",
    img: "",
    title: "Item9",
    desc: "Une description 9",
    size: 925,
  },
  {
    id: "10",
    img: "",
    title: "Item10",
    desc: "Une description 10",
    size: 1025,
  },
  {
    id: "11",
    img: "",
    title: "Item11",
    desc: "Une description 11",
    size: 1125,
  },
  {
    id: "12",
    img: "",
    title: "Item12",
    desc: "Une description 12",
    size: 1225,
  },
  {
    id: "13",
    img: "",
    title: "Item13",
    desc: "Une description 13",
    size: 1325,
  },
]