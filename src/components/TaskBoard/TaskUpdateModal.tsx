"use client";
import Swal from "sweetalert2";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/redux/slices/task/taskApi";
import { Spin, message } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { BsTrash3 } from "react-icons/bs";

const TaskItemModal = ({ isOpen, onClose, data, onSave }: any) => {
  const { control, handleSubmit, reset } = useForm();

  React.useEffect(() => {
    reset(data);
  }, [data, reset]);

  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const onSubmit = async (updatedData: any) => {
    try {
      const res = await updateTask(updatedData).unwrap();
      console.log(res);
      if (res?.data) {
        message.success("Task Updated");
        onSave(updatedData);
        onClose();
      }
    } catch (error) {}
  };

  const handleDelete = async () => {
    // Show a confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this Task. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteTask(data?._id).unwrap();
        if (res?.success) {
          message.success("Board Deleted");
          onClose();
        }
      } catch (error) {}
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-[#150F2D] p-4 rounded shadow-lg md:w-[450px] ">
        <div className="flex items-center justify-between">
          {" "}
          <h2 className="text-white text-lg font-semibold mb-2">Edit Task</h2>
          <button onClick={handleDelete} className="text-lg text-red-500">
            {" "}
            <BsTrash3 />
          </button>
        </div>
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
              {isLoading ? <Spin /> : "Edit"}
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
