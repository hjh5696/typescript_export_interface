export interface TestObject {
    x: number;
    y: string;
}

export const testFunction = (a: TestObject) => {
    return a.x + 1;
}

console.log(testFunction({x: 1, y: 1}))
