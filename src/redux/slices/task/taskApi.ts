import { authKey } from "@/constants/storageKey";
import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { getFromLocalStorage } from "@/utils/local-storage";

const authToken = getFromLocalStorage(authKey);
// console.log(authToken);

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTask: build.mutation({
      query: (taskData) => ({
        url: `/task/create-task`,
        method: "POST",
        headers: {
          Authorization: `${authToken}`,
        },
        body: taskData,
      }),

      invalidatesTags: [tagTypes.task],
    }),
    //!

    tasks: build.query({
      query: (options) => {
        const { searchTerm, status, page, limit } = options;
        let query = "/task/my-tasks?";
        if (searchTerm) {
          query += `searchTerm=${searchTerm}&`;
        }

        if (status) {
          query += `status=${status}&`;
        }

        query += `page=${page}&limit=${limit}`;

        return {
          url: query,
          method: "GET",
          headers: {
            Authorization: `${authToken}`,
          },
        };
      },
      providesTags: [tagTypes.task],
    }),

    //!
    updateTask: build.mutation({
      query: (data) => ({
        url: `/task/update-task/${data?._id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `${authToken}`,
        },
      }),
      invalidatesTags: [tagTypes.task],
    }),

    //! delete student
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `${authToken}`,
        },
      }),
      invalidatesTags: [tagTypes.task],
    }),
    //!
  }),
});

export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useTasksQuery,
  useUpdateTaskMutation,
} = taskApi;
