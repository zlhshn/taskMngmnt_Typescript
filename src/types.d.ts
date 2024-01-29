interface ITodoType {
    id: string | number;
    isDone: boolean;
    task: string;
    todo?: string;
    date: Date;
  }

  type AddFn= (text:string)=> Promise<void>
  type ToggleFn =(todo:string)=>Promise<void>
  type DeleteFn =(id:string| number) => Promise<void>