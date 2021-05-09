import {useEffect} from 'react'
import {isNull} from 'lodash'
import {toast} from 'react-hot-toast'


export const Toast = ({ success = [], error = [], onClose=f=>f }) => {

  return <>
    {success.map((obj) =>  <ToastSuccess condition={obj.condition} message={obj.message} onClose={onClose} />) }
    {error.map((obj) =>  <ToastError condition={obj.condition} message={obj.message} onClose={onClose} />) }
  </>
}


export const ToastSuccess = ({ condition, message, onClose=f=>f }) => {

  useEffect(() => {
    if (condition === true){
      onClose()
      toast.success(message, {
        style: {
          border: '1px solid #009EF7',
          padding: '16px',
          color: '#009EF7',
        },
        iconTheme: {
          primary: '#009EF7',
          secondary: '#fff',
        },
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, message])

  return null
}


export const ToastError = ({ error, defaultMessage="Something went wrong. Please try again later.", onClose=f=>f }) => {

  useEffect(() => {
    if (!isNull(error)){
      toast.error(defaultMessage, {
        style: {
          border: '1px solid #f85365',
          padding: '16px',
          color: '#f85365',
        },
        iconTheme: {
          primary: '#f85365',
          secondary: '#fff',
        },
      })
      onClose()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, defaultMessage])

  return null
}
