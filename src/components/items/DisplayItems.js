import React, {useEffect} from "react"
import { memoize, isEmpty } from "lodash"
import {DEFAULT_ITEM, ITEM_COMPONENT} from "./item-types/item-types"
import {Row} from "react-bootstrap"
import Typography from "@material-ui/core/Typography"
import ItemNotFound from "../extras/ItemNotFound"
import {useControlUISelector} from ".."


const DisplayItems = ({ fields = [], title, children, show=true, error, isFetching=false, object }) => {

  const displayUiProps = useControlUISelector()

  useEffect(() => {
    if (!isEmpty(fields) && displayUiProps){
      displayUiProps.setDisplayFields(fields, true)
    }
    if (displayUiProps){
      displayUiProps.setObject(object)
      displayUiProps.setFetching(isFetching && isEmpty(object))
    }

    if (!isEmpty(error)){
      displayUiProps.setError(error)
    }

    // eslint-disable-next-line
  }, [fields, isFetching, object, error])

  const renderField = memoize(({ component, ...props }) => {
    const Component = ITEM_COMPONENT[component] || DEFAULT_ITEM
    return (
      <Component field={props} isFetching={isFetching} object={object} />
    )
  })

  if (displayUiProps.isNotAvailableResource) {
    return <ItemNotFound />
  }else {
    return (
      <>
        { title && <Typography className="mt-5">{ title }</Typography> }
        <Row className={ show ? "" : " d-none" }>
          { fields.map((field, i) => (
            <React.Fragment key={i}>{ renderField(field) }</React.Fragment>
          )) }
        </Row>
        {
          React.Children.map(children, (child, i) => (
            <React.Fragment key={i}>{ React.cloneElement(child, { ...child.props, isFetching, object }) }</React.Fragment>
          ))
        }
      </>
    )
  }
}


export default React.memo(DisplayItems)
