export const DemoItemList = Array.from({ length: 10 }, (v, i) => ({
    id: i + 1,
    title: `Page ${i + 1}`,
    checked: false,
}));
