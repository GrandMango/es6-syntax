import { inject } from "../practice2";

const items = ['item1', 'item2', 'item3', 'item4', 'item5']
const sections = [
  { content: 'section1', index: 0 },
  { content: 'section2', index: 2 }
]
const output = ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']

test("inject sections to expect result", () => {
  expect(inject(items, sections)).toEqual(output);
});

const sections_case2 = [
  { content: 'section1', index: 0 },
  { content: 'section2', index: 2 },
  { content: 'section3', index: 4 },
  { content: 'section4', index: 5 }
]
const output_case2 = ['section1', 'item1', 'item2', 'section2', 'item3', 'item4','section3', 'item5', 'section4']

test("inject sections to expect result case 2", () => {
  expect(inject(items, sections_case2)).toEqual(output_case2);
});
