"use client";
import React, { useEffect } from "react";
import { useCreateBoardMutation } from "@/redux/slices/board/boardApi";
import { getUserInfo } from "@/services/auth.service";
import { Spin, message } from "antd";

import { useForm, Controller } from "react-hook-form";

const CreateBoardModal = ({ isOpen, onClose, onSave }: any) => {
  const { control, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [createBoard, { isLoading, error }] = useCreateBoardMutation();
  const { userId } = getUserInfo() as any;

  //!Error handling
  useEffect(() => {
    if (error) {
      //@ts-ignore
      if ("data" in error) {
        const errorData = error as any;
        message.error(errorData.data.message);
      } else {
        console.error(error);
      }
    }
  }, [error]);

  const onSubmit = async (data: any) => {
    try {
      const boardData = {
        boardName: data?.boardName,
        // status: data?.status,
        user: userId,
      };
      const res = await createBoard(boardData).unwrap();
      console.log(res);
      if (res?.data?.boardName) {
        message.success("Board Created Successful");
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
          Create New Board
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Controller
              name="boardName"
              control={control}
              rules={{ required: "Board Board Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Board Title"
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
          {/* <div className="mb-4">
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
          </div> */}
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

export default CreateBoardModal;
