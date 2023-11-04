import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userCreate: build.mutation({
      query: (userData) => ({
        url: `/user/signup`,
        method: "POST",
        body: userData,
      }),

      invalidatesTags: [tagTypes.user],
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

    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `/user`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any[], meta: any) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
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

export const {
  useUserCreateMutation,
  useUserLoginMutation,
  useLoadUserQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} = userApi;
