/* eslint-disable @typescript-eslint/no-unused-vars*/
/**TypeScriptの基本の型 */

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//String 文字
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple型
let tuple: [number, string] = [0, "A"];

//any
let any1: any = false;

//void 関数の返却地なし
const funcA = (): void => {
  const test = "Test";
};

//null型
let null1: null = null;

//undefinded
let undefined1: undefined = undefined;

//object型
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: "A" };
