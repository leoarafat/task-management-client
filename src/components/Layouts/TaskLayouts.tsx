"use client";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import BoardItemModal from "./BoardModal";
import CreateBoardModal from "./CreateBorderModal";
import CreateTaskModal from "./CreateTaskModal";
import { boardList } from "@/shared/Data";
import TaskItemModal from "./TaskUpdateModal";
const taskData = [
  {
    id: 1,
    title: "Task 1",
    status: "Todo",
    description:
      "ALorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque maiores, quia soluta eum tenetur quaerat debitis minima architecto quae dolor, unde laborum molestiae. Voluptas vero illum aliquam molestias voluptate.",
  },
  {
    id: 2,
    title: "Task 2",
    status: "Doing",
    description:
      "BLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque maiores, quia soluta eum tenetur quaerat debitis minima architecto quae dolor, unde laborum molestiae. Voluptas vero illum aliquam molestias voluptate.",
  },
  {
    id: 3,
    title: "Task 3",
    status: "Done",
    description:
      "CLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque maiores, quia soluta eum tenetur quaerat debitis minima architecto quae dolor, unde laborum molestiae. Voluptas vero illum aliquam molestias voluptate.",
  },
  // Add more tasks with different statuses
];

const TaskManagementLayout = () => {
  //! State List Start
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCreateBoardModalOpen, setIsCreateBoardModalOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  //! State List End

  const handleListItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  // const handleTaskItemClick = (item: any) => {
  //   setSelectedItem(item);
  //   setIsModalOpen(true);
  // };

  const handleSaveChanges = (updatedData: any) => {
    // Update the data in your state or data source
    console.log("Updated data:", updatedData);
  };
  const handleTaskSaveChanges = (updatedData: any) => {
    // Update the data in your state or data source
    console.log("Updated data:", updatedData);
  };
  const handleCreateBoard = () => {
    setIsCreateBoardModalOpen(true);
  };
  const handleCreateTask = () => {
    setIsCreateTaskModalOpen(true);
  };
  return (
    <div className="flex h-screen">
      {/* Left Sidebar: Board Lists */}
      <div className="w-1/5 p-4 bg-[#150F2D] ">
        <h2 className="text-lg font-semibold text-white mb-4">Board Lists</h2>
        <ul>
          {boardList?.map((board, index) => (
            <li
              key={index}
              onClick={() => handleListItemClick(board)}
              className="text-white text-lg cursor-pointer transition duration-300 hover:text-blue-400"
            >
              {board.title}
            </li>
          ))}
        </ul>
        <hr className="my-4 border-b border-gray-600" />
        <button
          onClick={handleCreateBoard}
          className="w-full flex items-center justify-center p-2 mt-4 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          <BsPlusCircle /> <span className="ml-1">New Board</span>
        </button>
      </div>
      {/* Main Content Area */}
      <div className="w-3/5 p-4 flex justify-between">
        {/* Todo Column */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Todo</h3>
          <ul>
            {taskData
              .filter((task) => task.status === "Todo")
              .map((task, index) => (
                <div
                  onClick={() => handleListItemClick(task)}
                  key={index}
                  className="text-white bg-[#25213D] rounded-md p-4 mb-4 shadow-md w-[240px] m-1 "
                >
                  <p className="text-xl font-semibold mb-2">{task.title}</p>
                  <p className="text-sm mb-2">{task.description}</p>
                  <p className="text-xs">
                    Status:{" "}
                    <span
                      className={`inline-block px-2 py-1 rounded-md ${
                        task.status === "todo"
                          ? "bg-blue-500 text-white"
                          : task.status === "doing"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {task.status}
                    </span>
                  </p>
                </div>
              ))}
          </ul>
        </div>

        {/* In Progress Column */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">In Progress</h3>
          <ul>
            {taskData
              .filter((task) => task.status === "Doing")
              .map((task, index) => (
                <div
                  key={index}
                  onClick={() => handleListItemClick(task)}
                  className="text-white bg-[#BAA479] rounded-md p-4 mb-4 shadow-md w-[240px] m-1 "
                >
                  <p className="text-xl font-semibold mb-2">{task.title}</p>
                  <p className="text-sm mb-2">{task.description}</p>
                  <p className="text-xs">
                    Status:{" "}
                    <span
                      className={`inline-block px-2 py-1 rounded-md ${
                        task.status === "todo"
                          ? "bg-blue-500 text-white"
                          : task.status === "doing"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {task.status}
                    </span>
                  </p>
                </div>
              ))}
          </ul>
        </div>

        {/* Done Column */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Done</h3>
          <ul>
            {taskData
              .filter((task) => task.status === "Done")
              .map((task, index) => (
                <div
                  key={index}
                  onClick={() => handleListItemClick(task)}
                  className={`text-white bg-green-500 rounded-md p-4 mb-4 shadow-md w-[240px] m-1`}
                >
                  <p className="text-xl font-semibold mb-2">{task.title}</p>
                  <p className="text-sm mb-2">{task.description}</p>
                  <p className="text-xs">
                    Status:{" "}
                    <span
                      className={`inline-block px-2 py-1 rounded-md ${
                        task.status === "Done"
                          ? "bg-blue-500 text-white"
                          : task.status === "doing"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {task.status}
                    </span>
                  </p>
                </div>
              ))}
          </ul>
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="w-1/5 p-4 bg-[#150F2D] ">
        <div className="mb-6">
          <button
            onClick={handleCreateTask}
            className="w-full p-2 mb-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            New Task
          </button>
          <button className="w-full p-2 bg-gray-300 text-gray-600 font-medium rounded hover:bg-gray-400">
            Filter
          </button>
        </div>
        {/* Other widgets or information can be added here */}
      </div>

      {/* Render the modal */}
      <BoardItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedItem}
        onSave={handleSaveChanges}
      />
      {/* Render the task update modal */}
      <TaskItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedItem}
        onSave={handleTaskSaveChanges}
      />
      {/* Create Board Modal */}
      {isCreateBoardModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <CreateBoardModal
            isOpen={isCreateBoardModalOpen}
            onClose={() => setIsCreateBoardModalOpen(false)}
            onSave={handleCreateBoard}
          />
        </div>
      )}
      {/* Create Task Modal */}
      {isCreateTaskModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <CreateTaskModal
            isOpen={isCreateTaskModalOpen}
            onClose={() => setIsCreateTaskModalOpen(false)}
            onSave={handleCreateTask}
          />
        </div>
      )}
    </div>
  );
};

export default TaskManagementLayout;
