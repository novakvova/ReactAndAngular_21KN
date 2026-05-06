import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IRegister} from "../types/account/IRegister.ts";
import type {IRegisterResponse} from "../types/account/IRegisterResponse.ts";
import {serialize} from "object-to-formdata";

export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createAWSQuery("api/account"),
    endpoints: (builder) => ({
        register: builder.mutation<IRegisterResponse, IRegister>({
            query: (body) =>
            {
                console.log("Submit Data Query", body);
                // const form = serialize(body);
                // console.log("is form DATA", form instanceof FormData); // має бути true
                return {
                    url: "register",
                    method: "POST",
                    body
                }
            }
        })
    })
});

export const {
    useRegisterMutation
}  = apiAccount;