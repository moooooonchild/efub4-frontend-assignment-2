///week2
class Developer {
  constructor(
    public name: string,
    public age: number,
    public position: string
  ) {}
  sayHi() {
    console.log(
      `저는 ${this.age}살이고 이름은 ${this.name}입니다. 포지션은
    ${this.position}입니다`
    );
  }
}

class FrontendDeveloper extends Developer {
  protected react: boolean;

  constructor(name: string, age: number, position: string, react: boolean) {
    super(name, age, position);
    this.react = react;
  }

  func() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.react);
  }
}

////

function forEach<T, U>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

////
interface Student {
  type: 'student';
  school: string;
}
interface Developer {
  type: 'developer';
  skill: string;
}
//User 인터페이스를 제네릭 인터페이스로 업그레이드 해주세요.(제네릭 타입은 T로 설정해주세요.)
interface User<T> {
  name: string;
  profile: T;
}
//제네릭을 이용해 매개변수 타입을 나타내어 불필요한 타일 좁히기를 없애주세요
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

////
type IsStringType<T> = T extends string ? string[] : number[];

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;

const a: T1 = ['EFUB', '프론트엔드', '최고'];
const b: T2 = [1, 2, 3];

////
interface Todo {
  title: string;
  description: string;
  completed: Boolean;
  createdAt: number;
}

//type TodoPreview = Pick<Todo, 'title' | 'completed'>;
type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Study English',
  completed: false,
  createdAt: 20240915,
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Study Math',
  description: 'Exam Tomorrow',
};
