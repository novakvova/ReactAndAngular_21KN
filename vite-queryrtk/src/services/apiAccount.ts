import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IRegister} from "../types/account/IRegister.ts";
import type {IRegisterResponse} from "../types/account/IRegisterResponse.ts";

export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createAWSQuery("account"),
    endpoints: (builder) => ({
        register: builder.mutation<IRegisterResponse, IRegister>({
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