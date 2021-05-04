import React, {useEffect} from "react"
import { isEqual } from "lodash"
import OfflinePage from "./../components/OfflinePage"
import {useDispatch, useSelector} from "react-redux"
import {ping} from "../../../helpers"
import {setOffline, setOnline} from "../store/actions"

const Offline = ({ children }) => {
  const dispatch = useDispatch()
  
  const { isOffline, checkConnectivity } = useSelector((state) => ({ 
    checkConnectivity: state.connectivity.checkConnectivity, 
    isOffline: state.connectivity.isOffline 
  }), isEqual)

  useEffect(() => {
    if (checkConnectivity){
      ping({ 
        isOnlineCallback: () => dispatch(setOnline()),
        isOfflineCallback: () => dispatch(setOffline())
      })
    }

    // eslint-disable-next-line
  }, [checkConnectivity])


  if (isOffline) {
    return React.isValidElement(children) ? children : <OfflinePage />
  }

  return <></>
}

export default Offline
