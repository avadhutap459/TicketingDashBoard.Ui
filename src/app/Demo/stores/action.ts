import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { userResponse } from "../type/UserResponse.interface";


export const userActions = createActionGroup({
  source: 'user',
  events: {
    User: props<{ userId: number }>(),
    'User success': props<{ UserDetails: userResponse }>(),
    'User failure': emptyProps()
  }
});
