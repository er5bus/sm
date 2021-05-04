import React, {useEffect} from "react"
import { memoize, isEmpty } from "lodash"
import {DEFAULT_ITEM, ITEM_COMPONENT} from "./item-types/item-types"
import {Row} from "react-bootstrap"
import {useControlUISelector} from ".."


const RenderItems = ({ fields, show=true, isFetching=false, object }) => {

  const displayUiProps = useControlUISelector()

  useEffect(() => {
    if (!isEmpty(fields) && displayUiProps && show){
      displayUiProps.setDisplayFields(fields, show)
    }
    // eslint-disable-next-line
  }, [fields])

  const renderField = memoize(({ component, ...props }) => {
    const Component = ITEM_COMPONENT[component] || DEFAULT_ITEM
    return (
      <Component field={props} isFetching={isFetching} object={object} />
    )
  })


  return (
    <>
      <Row className={ show ? "" : " d-none" }>
        { fields.map((field, i) => (
          <React.Fragment key={i}>{ renderField(field) }</React.Fragment>
        )) }
      </Row>
    </>
  )
}


export default React.memo(RenderItems)
