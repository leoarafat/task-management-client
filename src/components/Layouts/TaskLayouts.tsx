"use client";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import BoardItemModal from "./BoardModal";
import CreateBoardModal from "./CreateBorderModal";
import CreateTaskModal from "./CreateTaskModal";
import { boardList } from "@/shared/Data";
const taskData = [
  { title: "Task 1", status: "todo" },
  { title: "Task 2", status: "inprogress" },
  { title: "Task 3", status: "done" },
  // Add more tasks with different statuses
];
const TaskManagementLayout = () => {
  //! State List Start
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCreateBoardModalOpen, setIsCreateBoardModalOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  //! Start List End

  const handleListItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSaveChanges = (updatedData: any) => {
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
      <div className="w-1/5 p-4 bg-[#150F2D] border-r">
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
      <div className="w-3/5 p-4 flex justify-around">
        {/* Todo Column */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Todo</h3>
          <ul>
            {taskData
              .filter((task) => task.status === "todo")
              .map((task, index) => (
                <li key={index} className="text-white text-lg  ">
                  {task.title}
                </li>
              ))}
          </ul>
        </div>

        {/* In Progress Column */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">In Progress</h3>
          <ul>
            {taskData
              .filter((task) => task.status === "inprogress")
              .map((task, index) => (
                <li key={index} className="text-white text-lg">
                  {task.title}
                </li>
              ))}
          </ul>
        </div>

        {/* Done Column */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Done</h3>
          <ul>
            {taskData
              .filter((task) => task.status === "done")
              .map((task, index) => (
                <li key={index} className="text-white text-lg">
                  {task.title}
                </li>
              ))}
          </ul>
        </div>

        {/* If you have a form for task creation, render it here */}
        {/* ... Your form for creating tasks ... */}
      </div>
      {/* Right Sidebar */}
      <div className="w-1/5 p-4 bg-[#150F2D] border-l">
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
