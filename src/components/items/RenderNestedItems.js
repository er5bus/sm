import React, {useEffect} from "react"
import { memoize, isEmpty } from "lodash"
import {DEFAULT_ITEM, ITEM_COMPONENT} from "./item-types/item-types"
import {Row} from "react-bootstrap"
import {useControlUISelector} from ".."
import {getAttr} from "../../../../helpers"


const RenderNestedItems = ({ fields, fieldArrayName, show=true, isFetching=false, object }) => {

  const displayUiProps = useControlUISelector()

  useEffect(() => {
    if (!isEmpty(fields) && displayUiProps && show){
      displayUiProps.setDisplayFields(fields, show)
    }
    // eslint-disable-next-line
  }, [fields])

  const renderField = memoize(({ component, ...props }, item) => {
    const Component = ITEM_COMPONENT[component] || DEFAULT_ITEM
    return (
      <Component field={props} isFetching={isFetching} object={item} />
    )
  })

  return (
    <>
      <Row className={ show ? "" : " d-none" }>
        { getAttr(object, fieldArrayName, []).map((item) => fields.map((field, i) => (
          <React.Fragment key={i}>{ renderField(field, item) }</React.Fragment>
        ))) }
      </Row>
    </>
  )
}


export default React.memo(RenderNestedItems)
