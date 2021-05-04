import * as routes from "./../../../routes/document"

import { combinePathRoutes, getBaseUrl } from "./../../../../../../../helpers"

import * as dialogRoute from "./dialog"

export const getBasePath = () => getBaseUrl(routes.folderDocumentList.path)

export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
