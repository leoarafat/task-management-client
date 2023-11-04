"use client";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import BoardItemModal from "./BoardModal";
const TaskManagementLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const boardList = [
    { title: "Example Board-1", status: "todo" },
    { title: "Example Board-2", status: "inprogress" },
    { title: "Example Board-3", status: "done" },
    { title: "Example Board-4", status: "todo" },
  ];

  const handleListItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSaveChanges = (updatedData: any) => {
    // Update the data in your state or data source
    console.log("Updated data:", updatedData);
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar: Board Lists */}
      <div className="w-1/5 p-4 bg-[#150F2D] border-r">
        <h2 className="text-lg font-semibold text-white mb-4">Board Lists</h2>
        <ul>
          {boardList.map((board, index) => (
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
        <button className="w-full flex items-center justify-center p-2 mt-4 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">
          <BsPlusCircle /> <span className="ml-1">New Board</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-3/5 p-4">{/* Page content goes here */}</div>

      {/* Right Sidebar */}
      <div className="w-1/5 p-4 bg-[#150F2D] border-l">
        <div className="mb-6">
          <button className="w-full p-2 mb-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600">
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
    </div>
  );
};

export default TaskManagementLayout;
