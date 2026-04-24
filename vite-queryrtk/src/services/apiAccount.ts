import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createBaseQuery.ts";
import type {IPost} from "../types/IPost.ts";
import type {ICreatePost} from "../types/ICreatePost.ts";

export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createAWSQuery("account"),
    endpoints: (builder) => ({
        register: builder.mutation<IPost, ICreatePost>({
            query: (body) => ({
                url: "register",
                method: "POST",
                body
            })
        })
    })
});

export const {
    useRegisterMutation
}  = apiAccount;