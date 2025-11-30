import type { User } from "./User"


export type LoginUser = Pick<User, 'name' | 'password'>
