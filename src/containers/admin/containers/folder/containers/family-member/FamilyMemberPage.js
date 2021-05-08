import React, { useEffect } from 'react'
import FamilyMembersLoadingDialog from './components/loading/FamilyMembersLoadingDialog'
import { FamilyMembersUIProvider } from './context/FamilyMembersUIContext'
import FamilyMemberCard from './components/card/FamilyMembersCard'
import { injectIntl } from 'react-intl'
import { useSubheader } from '../../../../../../components/layout'

import { getDialogRoutes, getBasePath } from './routes'
import * as pageRoutes from './../../routes/family-member'

import { ProtectedDialogRoute } from '../../../../../../components/routes'
import { getNestedPath } from '../../../../../../helpers'

const FamilyMemberPage = ({ intl, history, goBackToList, params: { param: folderParam } }) => {
  const basePath = getBasePath()
  const dialogRoutes = getDialogRoutes()

  const suhbeader = useSubheader()

  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: 'FAMILY_MEMBER.LIST.TITLE' }))
  })

  const familyMembersUIFamilyMembers = {
    newFamilyMemberButtonClick: () => {
      history.push(getNestedPath(basePath, pageRoutes.familyMemberCreate.path).replace(':param', folderParam))
    },
    newFamilyMemberRule: pageRoutes.familyMemberCreate,
    openShowFamilyMemberPage: (param) => {
      history.push(getNestedPath(basePath, pageRoutes.familyMemberShow.path).replace(':param', folderParam).replace(':familyMemberParam', param))
    },
    showFamilyMemberRule: pageRoutes.familyMemberShow,
    openEditFamilyMemberPage: (param) => {
      history.push(getNestedPath(basePath, pageRoutes.familyMemberEdit.path).replace(':param', folderParam).replace(':familyMemberParam', param))
    },
    editFamilyMemberRule: pageRoutes.familyMemberEdit,

    openDeleteFamilyMemberDialog: (param) => {
      history.push(dialogRoutes.familyMemberDelete.path.replace(':param', folderParam).replace(':familyMemberParam', param))
    },
    deleteFamilyMemberRule: dialogRoutes.familyMemberDelete,
    openDeleteFamilyMembersDialog: () => {
      history.push(dialogRoutes.familyMembersDelete.path.replace(':param', folderParam))
    },
    deleteFamilyMembersRule: dialogRoutes.familyMembersDelete
  }

  const onHide = () => {
    history.push(basePath.replace(':param', folderParam))
  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} history={history} show={match != null} onHide={onHide} />
  }

  return (
    <FamilyMembersUIProvider familyMembersUIFamilyMembers={familyMembersUIFamilyMembers}>
      <FamilyMembersLoadingDialog />
      {Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <FamilyMemberCard folderParam={folderParam} goBackToFolder={goBackToList} />
    </FamilyMembersUIProvider>
  )
}

export default injectIntl(FamilyMemberPage)
