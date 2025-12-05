import { userResponse } from "./UserResponse.interface"

export interface GetUserStateInterface {
    Loading : boolean
    error : string | null | undefined
    currentUser : userResponse | null | undefined
    isSuccess : boolean | null | undefined
}