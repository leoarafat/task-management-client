import React from "react";

const TaskCard = ({ task, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={`shadow-lg rounded-md p-4 m-2 w-[240px] max-w-[240px] cursor-pointer
      ${
        task?.status === "Todo"
          ? "bg-purple-500"
          : task?.status === "Doing"
          ? "bg-green-600"
          : task?.status === "Done"
          ? "bg-blue-700"
          : ""
      }
      `}
    >
      <p className="text-xl font-semibold mb-2">{task.title}</p>
      <p className="text-sm mb-2">{task.description}</p>
      <div className="flex items-center mb-2">
        <p className="text-xs font-semibold mr-2">Status:</p>
        <span
          className={`px-2 py-1 rounded-md text-white ${
            task.status === "Todo"
              ? "bg-blue-500"
              : task.status === "Doing"
              ? "bg-yellow-500"
              : "bg-green-500"
          }`}
        >
          {task.status}
        </span>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-xs font-semibold mr-2">Board:</p>
        <span className="text-purple-400 font-semibold">
          {task?.board?.boardName}
        </span>
      </div>
      <div className="mb-2">
        <p className="text-xs font-semibold mb-1">Assigned Users:</p>
        <div className="flex flex-wrap">
          {task?.assignedUsers?.map((assign: any, userIndex: any) => (
            <span
              key={userIndex}
              className="bg-blue-500 text-white rounded-full text-xs px-2 py-1 mr-2 mb-2"
            >
              {assign}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
