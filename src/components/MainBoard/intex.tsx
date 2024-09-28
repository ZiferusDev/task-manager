import Heading from "./Heading";
import cls from "./mainBoard.module.scss";
import TasksList, { TasksListsTypes } from "./TasksList";

const tasksListsTypes: TasksListsTypes[] = [
  "notDone",
  "inProgress",
  "checking",
  "done",
];

const MainBoard = () => {
  return (
    <div className={cls.layout}>
      <Heading />
      <div className={cls.main}>
        {tasksListsTypes.map((type) => (
          <TasksList type={type} key={type} />
        ))}
      </div>
    </div>
  );
};

export default MainBoard;
