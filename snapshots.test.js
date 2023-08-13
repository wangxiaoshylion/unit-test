import { generateConfig, generateConfig2 } from "./snapshots";

test("测试快照snapshots", () => {
  expect(generateConfig()).toMatchSnapshot({
    // date: expect.any(Date)
    createdAt: expect.any(Date),
    id: expect.any(Number)
  });
});

test("测试快照snapshots-2", () => {
  expect(generateConfig2()).toMatchInlineSnapshot(
    {
      e: expect.any(Date)
    },
    `
    Object {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 567,
      "e": Any<Date>,
    }
  `
  );
});
