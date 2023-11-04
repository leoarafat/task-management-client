"use client";
import { boardList } from "@/shared/Data";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const CreateTaskModal = ({ isOpen, onClose, onSave }: any) => {
  const { control, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = (data: any) => {
    console.log(data);
    // Process the form data, and call the onSave function
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
              name="status"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 text-white bg-[#150F2D] border border-white rounded"
                >
                  {boardList?.map((board, index) => (
                    <option key={index} value={board.status}>
                      {board.title}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full p-2 text-white bg-[#150F2D] border border-white rounded"
                >
                  <option value="Todo">To-Do</option>
                  <option value="Doing">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              )}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white p-2 rounded mr-2"
              type="submit"
            >
              Save
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
