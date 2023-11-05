import { authKey } from "@/constants/storageKey";
import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { getFromLocalStorage } from "@/utils/local-storage";

const authToken = getFromLocalStorage(authKey);
// console.log(authToken);

export const boardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBoard: build.mutation({
      query: (boardData) => ({
        url: `/board/create-board`,
        method: "POST",
        headers: {
          Authorization: `${authToken}`,
        },
        body: boardData,
      }),

      invalidatesTags: [tagTypes.board],
    }),
    //!

    boards: build.query({
      query: () => {
        return {
          url: `/board/my-boards`,
          method: "GET",
          headers: {
            Authorization: `${authToken}`,
          },
        };
      },
      providesTags: [tagTypes.board],
    }),

    //!
    updateBoard: build.mutation({
      query: (data) => ({
        url: `/board/update-board/${data?._id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `${authToken}`,
        },
      }),
      invalidatesTags: [tagTypes.board],
    }),

    //! delete student
    deleteBoard: build.mutation({
      query: (id) => ({
        url: `/board/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `${authToken}`,
        },
      }),
      invalidatesTags: [tagTypes.board],
    }),
    //!
  }),
});

export const {
  useCreateBoardMutation,
  useBoardsQuery,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} = boardApi;
