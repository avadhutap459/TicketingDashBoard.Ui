import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { UserService } from "../service/user.Service"
import { userActions } from "./action"
import { catchError, map, of, switchMap, tap } from "rxjs"
import { userResponse } from "../type/UserResponse.interface"
import { HttpErrorResponse } from "@angular/common/http"
import { Router } from "@angular/router"

export const userEffect = createEffect(
    (action$ = inject(Actions), userService = inject(UserService)) => {
        return action$.pipe(
            ofType(userActions.user),
            switchMap(({ userId }) => {
                debugger
                return userService.Getuserdatabaseonuserid(userId).pipe(
                    map((UserDetails: userResponse) => {
                        debugger
                        return userActions.userSuccess({ UserDetails })
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(userActions.userFailure())
                    })
                )
            })
        )
    },
    { functional: true }
)


export const redirectAfterUserEffect = createEffect(
    (action$ = inject(Actions), router = inject(Router)) => {
        return action$.pipe(
            ofType(userActions.userSuccess),
            tap(() => {
                router.navigateByUrl('/componentTwo')
            })
        )
    },
    {functional : true, dispatch : false}
)