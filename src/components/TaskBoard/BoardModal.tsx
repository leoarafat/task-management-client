"use client";
import Swal from "sweetalert2";

import {
  useDeleteBoardMutation,
  useUpdateBoardMutation,
} from "@/redux/slices/board/boardApi";
import { message } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { BsTrash3 } from "react-icons/bs";
const BoardItemModal = ({ isOpen, onClose, data, onSave }: any) => {
  const { control, handleSubmit, reset } = useForm();

  //!RTK Handler
  const [deleteBoard] = useDeleteBoardMutation();
  const [updateBoard] = useUpdateBoardMutation();

  React.useEffect(() => {
    reset(data);
  }, [data, reset]);

  const onSubmit = async (updatedData: any) => {
    try {
      const res = await updateBoard(updatedData).unwrap();

      if (res?.data) {
        message.success("Board Updated");
        onSave(updatedData);
        onClose();
      }
    } catch (error) {
      message.error("Something wrong! Please try again.");
    }
  };
  const handleDelete = async () => {
    // Show a confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this board. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteBoard(data?._id).unwrap();
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
          <h2 className="text-white text-lg font-semibold mb-2">Edit Board</h2>
          <button onClick={handleDelete} className="text-lg text-red-500">
            {" "}
            <BsTrash3 />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="boardName" className="text-white mb-2">
              Board Name
            </label>
            <Controller
              name="boardName"
              control={control}
              defaultValue={data?.boardName}
              render={({ field }) => (
                <input
                  type="text"
                  className="w-full bg-[#150F2D] p-2 border rounded text-white"
                  {...field}
                />
              )}
            />
          </div>

          {/* <div className="mb-4">
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
          </div> */}

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

export default BoardItemModal;
