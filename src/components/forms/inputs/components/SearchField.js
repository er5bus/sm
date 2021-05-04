import React, {useState} from "react"
import { injectIntl } from "react-intl"
import { Col, Row } from "react-bootstrap"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import ClearIcon from "@material-ui/icons/Clear"

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundClip: "border-box",
    border: "1px solid #EBEDF3",
    borderRadius: "0.42rem",
    boxShadow: "0px 0px 30px 0px rgba(82, 63, 105, 0.05) !important"
  },
  input: {
    padding: "5px",
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
})

const SearchFilter = ({ intl, applyFilter }) => {

  const classes = useStyles()
  const [search, setSearch] = useState("")

  const onClear = () => {
    setSearch("")
    applyFilter({ search: "" })
  }

  const onSearch = () => applyFilter({ search })

  return (
    <div className="my-2">
      <Row className="form-group justify-content-end">
        <Col lg="4">
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              autoComplete="off"
              inputProps={{
                placeholder: intl.formatMessage({id: "GENERAL.INPUT.SEARCH"}),
                label: intl.formatMessage({ id: "GENERAL.INPUT.SEARCH"}),
                onChange: (e) => setSearch(e.currentTarget.value),
                value: search
              }}
              type="text"
            />
            <IconButton type="submit" onClick={onSearch} className={classes.iconButton} aria-label="Search">
              <SearchIcon className="text-primary" />
            </IconButton>
            <IconButton type="button" onClick={onClear} className={classes.iconButton} aria-label="Search">
              <ClearIcon className="text-danger" />
            </IconButton>
          </Paper>
        </Col>
      </Row>
    </div>
  )
}

export default injectIntl(SearchFilter)
