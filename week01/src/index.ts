let sum: (a: number, b?: number, c?: number) => number;

sum = (a, b, c) => {
  return a + (b ?? 0) + (c ?? 0);
};

console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));

//////

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
const introduce = (): Developer | Person => {
  return { name: 'Kim', age: 20, skill: 'React' };
};
let kim = introduce();

const isDeveloper = (target: Developer | Person): target is Developer => {
  return (target as Developer).skill !== undefined;
};

if (!isDeveloper(kim)) {
  console.log(kim.age);
} else {
  console.log(kim.skill);
}

/////

interface Sum {
  (a: number, b: number): number;
}

const sum2: Sum = (a, b) => {
  return a + b;
};
console.log(sum2(1, 2));

/////

interface Person {
  name: string;
  age: number;
}

interface Me extends Person {
  phone: string;
}

const me: Me = {
  name: 'hehe',
  age: 23,
  phone: '010-1234-5678',
};

console.log(me);
