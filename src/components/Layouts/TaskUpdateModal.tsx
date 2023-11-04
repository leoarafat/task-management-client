"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";

const TaskItemModal = ({ isOpen, onClose, data, onSave }: any) => {
  const { control, handleSubmit, reset } = useForm();

  React.useEffect(() => {
    reset(data);
  }, [data, reset]);

  const onSubmit = (updatedData: any) => {
    console.log(updatedData);
    onSave(updatedData);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-[#150F2D] p-4 rounded shadow-lg md:w-[450px] ">
        <h2 className="text-white text-lg font-semibold mb-2">Edit Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="text-white mb-2">
              Title
            </label>
            <Controller
              name="title"
              control={control}
              defaultValue={data?.title}
              render={({ field }) => (
                <input
                  type="text"
                  className="w-full bg-[#150F2D] p-2 border rounded text-white"
                  {...field}
                />
              )}
            />
          </div>
          <div className="mb-4">
            <Controller
              name="description"
              control={control}
              defaultValue={data?.description}
              rules={{ required: "Task description is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Task Description"
                  className={`w-full p-2 text-white bg-[#150F2D] border border-white rounded`}
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="text-white mb-2">
              Status
            </label>
            <Controller
              name="status"
              control={control}
              defaultValue={data?.status}
              render={({ field }) => (
                <select
                  className="w-full bg-[#150F2D] p-2 border rounded text-white"
                  {...field}
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
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Save
            </button>
            <button
              type="button"
              className="text-gray-600 p-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskItemModal;
