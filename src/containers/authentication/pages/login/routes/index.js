import {lazy} from "react";


export const login = {
  path: "/login",
  component: lazy(() => import("./../Login"))
}
