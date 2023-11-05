"use client";
import { useBoardsQuery } from "@/redux/slices/board/boardApi";
import { useCreateTaskMutation } from "@/redux/slices/task/taskApi";
import { getUserInfo } from "@/services/auth.service";

import { Spin, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const CreateTaskModal = ({ isOpen, onClose, onSave }: any) => {
  const { control, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { userId } = getUserInfo() as any;
  //! Query list
  const { data } = useBoardsQuery({});
  const [createTask, { isLoading, error }] = useCreateTaskMutation();

  const onSubmit = async (data: any) => {
    try {
      const taskData = {
        title: data?.title,
        description: data?.description,
        board: data?.board,
        status: data?.status,
        user: userId,
      };
      const res = await createTask(taskData).unwrap();
      console.log(res);
      if (res?.data) {
        message.success("Task Created");
      }
    } catch (error) {}

    onSave(data);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-[#150F2D] md:w-[450px] p-4 rounded shadow-lg">
        <h2 className="text-white text-lg font-semibold mb-2">
          Create New Task
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Controller
              name="title"
              control={control}
              rules={{ required: "Board title is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Task Title"
                  className={`w-full p-2 text-white bg-[#150F2D] border border-white rounded ${
                    errors.title ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">
                {errors.title.message as React.ReactNode}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Controller
              name="description"
              control={control}
              rules={{ required: "Task description is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Task Description"
                  className={`w-full p-2 text-white bg-[#150F2D] border border-white rounded ${
                    errors.description ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message as React.ReactNode}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Controller
              name="board"
              control={control}
              defaultValue=""
              rules={{ required: "Board is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 text-white bg-[#150F2D] border border-white rounded"
                >
                  <option value="select">Select Board</option>
                  {data?.data?.map((board: any, index: number) => (
                    <option key={index} value={board._id}>
                      {board?.boardName}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.board && (
              <p className="text-red-500 text-xs mt-1">
                {errors.board.message as React.ReactNode}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Controller
              name="status"
              control={control}
              rules={{ required: "Task Board is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 text-white bg-[#150F2D] border border-white rounded"
                >
                  <option value="select">Select Status</option>
                  <option value="Todo">To-Do</option>
                  <option value="Doing">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              )}
            />
            {errors.status && (
              <p className="text-red-500 text-xs mt-1">
                {errors.status.message as React.ReactNode}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white p-2 rounded mr-2"
              type="submit"
            >
              {isLoading ? <Spin /> : "Save"}
            </button>
            <button className="text-gray-600 p-2 rounded" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
