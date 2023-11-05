import { authKey } from "@/constants/storageKey";
import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { getFromLocalStorage } from "@/utils/local-storage";

const authToken = getFromLocalStorage(authKey);
// console.log(authToken);

export const userApi = baseApi.injectEndpoints({
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
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    //!
    loadUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/user/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
      providesTags: [tagTypes.user],
    }),
    //!

    boards: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/board/my-boards`,
          method: "GET",
          headers: {
            Authorization: `${authToken}`,
          },
          //   params: arg,
        };
      },
      //   transformResponse: (response: any[], meta: any) => {
      //     return {
      //       response,
      //       meta,
      //     };
      //   },
      providesTags: [tagTypes.board],
    }),

    //!
    updateProfile: build.mutation({
      query: ({ id, name }) => ({
        url: `/user/update-my-profile/${id}`,
        method: "PATCH",
        body: { name },
      }),
      invalidatesTags: [tagTypes.user],
    }),

    //! delete student
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
    //!
  }),
});

export const { useCreateBoardMutation, useBoardsQuery } = userApi;
