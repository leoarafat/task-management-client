"use client";
import { Pagination, PaginationProps } from "antd";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { useState } from "react";
import BoardItemModal from "./BoardModal";
import CreateBoardModal from "./CreateBorderModal";
import CreateTaskModal from "./CreateTaskModal";
import TaskItemModal from "./TaskUpdateModal";
import { getUserInfo } from "@/services/auth.service";
import { useBoardsQuery } from "@/redux/slices/board/boardApi";
import { useTasksQuery } from "@/redux/slices/task/taskApi";
import { StatusList } from "@/shared/Data";

const TaskManagementLayout = () => {
  //! State List Start
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [current, setCurrent] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTaskItem, setSelectedTaskItem] = useState(null);
  const [isCreateBoardModalOpen, setIsCreateBoardModalOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  // console.log(selectedStatus);
  const { userId } = getUserInfo() as any;

  const { data } = useBoardsQuery({});
  const { data: taskData } = useTasksQuery({
    searchTerm: searchValue || "",
    status: selectedStatus || "",
    page: current,
    limit: 10,
  });

  // console.log(data);
  //!
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  //!
  const handleListItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  //!handle task
  const handleTaskListItemClick = (item: any) => {
    setSelectedTaskItem(item);
    setTaskIsModalOpen(true);
  };

  //! board update handler
  const handleSaveChanges = (boardData: any) => {
    console.log("Updated data from task layout page:", boardData);
  };
  const handleTaskSaveChanges = (taskData: any) => {
    console.log("Updated data:", taskData);
  };
  const handleCreateBoard = () => {
    setIsCreateBoardModalOpen(true);
  };
  const handleCreateTask = () => {
    setIsCreateTaskModalOpen(true);
  };

  const onChange: PaginationProps["onChange"] = (page: any) => {
    setCurrent(page);
  };
  const handleFilterClick = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };
  const handleStatusChange = (event: any) => {
    const status = event.target.value;
    setSelectedStatus(status);
  };
  const clearFilter = () => {
    setSelectedStatus("");
  };
  return (
    <>
      <div className="flex  h-screen ">
        {/* Left Sidebar: Board Lists */}
        <div className="w-1/5 p-4 bg-[#150F2D] ">
          <h2 className="text-lg font-semibold text-white mb-4">Board Lists</h2>
          <ul>
            {data?.data?.map((board: any, index: number) => (
              <li
                key={index}
                onClick={() => handleListItemClick(board)}
                className="text-white text-lg cursor-pointer transition duration-300 hover:text-blue-400"
              >
                {board.boardName}
              </li>
            ))}
          </ul>
          <hr className="my-4 border-b border-gray-600" />
          <button
            onClick={handleCreateBoard}
            className="w-full flex items-center justify-center p-2 mt-4 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            {userId ? (
              <>
                {" "}
                <BsPlusCircle /> <span className="ml-1">New Board</span>
              </>
            ) : (
              "Login to access"
            )}
          </button>
        </div>
        {/* Main Content Area */}

        <div className="w-3/5">
          <div className="mb-6 flex justify-center  items-center ">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search tasks..."
              className="p-2 mr-2 text-gray-900 border border-gray-300 rounded"
            />
            <BsSearch size={20} className="text-gray-500" />
          </div>
          <div className=" p-4 flex justify-between">
            {/* Todo Column */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Todo</h3>
              <ul>
                {taskData?.data
                  .filter((task: any) => task.status === "Todo")
                  .map((task: any, index: any) => (
                    <div
                      onClick={() => handleTaskListItemClick(task)}
                      key={index}
                      className="text-white bg-[#25213D] rounded-md p-4 mb-4 shadow-md w-[240px] m-1 "
                    >
                      <p className="text-xl font-semibold mb-2">{task.title}</p>
                      <p className="text-sm mb-2">{task.description}</p>
                      <p className="text-xs">
                        Status:{" "}
                        <span
                          className={`inline-block px-2 py-1 rounded-md ${
                            task.status === "Todo"
                              ? "bg-blue-500 text-white"
                              : task.status === "Doing"
                              ? "bg-yellow-500 text-black"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {task.status}
                        </span>
                      </p>
                      <p>
                        {" "}
                        Board:{" "}
                        <span className="text-purple-400 font-semibold">
                          {task?.board?.boardName}
                        </span>
                      </p>
                    </div>
                  ))}
              </ul>
            </div>

            {/* In Progress Column */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                In Progress
              </h3>
              <ul>
                {taskData?.data
                  .filter((task: any) => task.status === "Doing")
                  .map((task: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => handleTaskListItemClick(task)}
                      className="text-white bg-[#3E96CD] rounded-md p-4 mb-4 shadow-md w-[240px] m-1 "
                    >
                      <p className="text-xl font-semibold mb-2">{task.title}</p>
                      <p className="text-sm mb-2">{task.description}</p>
                      <p className="text-xs">
                        Status:{" "}
                        <span
                          className={`inline-block px-2 py-1 rounded-md ${
                            task.status === "Todo"
                              ? "bg-blue-500 text-white"
                              : task.status === "Doing"
                              ? "bg-yellow-500 text-black"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {task.status}
                        </span>
                      </p>
                      <p>
                        {" "}
                        Board:{" "}
                        <span className="text-slate-600 font-semibold">
                          {task?.board?.boardName}
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
                {taskData?.data
                  .filter((task: any) => task.status === "Done")
                  .map((task: any, index: any) => (
                    <div
                      key={index}
                      onClick={() => handleTaskListItemClick(task)}
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
                              : task.status === "Doing"
                              ? "bg-yellow-500 text-black"
                              : "bg-green-500 text-white"
                          }`}
                        >
                          {task.status}
                        </span>
                      </p>
                      <p>
                        {" "}
                        Board:{" "}
                        <span className="text-gray-600 font-semibold">
                          {task?.board?.boardName}
                        </span>
                      </p>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
          <div className="text-center flex justify-end items-center">
            <Pagination
              current={current}
              onChange={onChange}
              total={taskData?.meta?.total}
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/5 p-4 bg-[#150F2D] ">
          <div className="mb-6">
            <button
              onClick={handleCreateTask}
              className="w-full p-2 mb-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
            >
              Add New Task
            </button>
            <button
              onClick={handleFilterClick}
              className="w-full p-2 bg-gray-300 text-gray-600 font-medium rounded hover:bg-gray-400"
            >
              Filter
            </button>
          </div>

          {isFilterModalOpen && (
            <div className="p-4 bg-[#150F2D] text-white">
              <h3 className="text-lg font-semibold mb-4">Filter by Status</h3>
              <div className="mb-2">
                <div>
                  <label className="inline-flex items-center mr-4 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value=""
                      checked={selectedStatus === ""}
                      onChange={clearFilter}
                      className="form-radio h-4 w-4 text-gray-400"
                    />
                    <span className="ml-2">Clear Filter</span>
                  </label>
                  {StatusList?.map((status: any) => (
                    <label
                      key={status.id}
                      className="inline-flex items-center mr-4 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="status"
                        value={status.status}
                        checked={selectedStatus === status.status}
                        onChange={handleStatusChange}
                        className={`form-radio h-4 w-4 text-${status.status}-400`}
                      />
                      <span className="ml-2">{status.status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
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
          isOpen={isTaskModalOpen}
          onClose={() => setTaskIsModalOpen(false)}
          data={selectedTaskItem}
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
    </>
  );
};

export default TaskManagementLayout;
