import { Trans } from 'react-i18next'
import { Img } from './../controls'

const PageNotFound = () => {

  return (
    <div className="error px-10 py-10 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center">
        <Img alt="404" className="img-responsive" width="600" height="405" path="/media/error/404.svg" />
      </div>
      <div  className="text-center error-text py-15 py-md-5">
        <p className="display-4 font-weight-boldest text-primary mb-12">
          <Trans> Page not found </Trans>
        </p>
        <p className="font-size-h1 font-weight-boldest text-dark-75">
          <Trans> We cannot find the page you are looking for </Trans>
        </p>
        <p className="font-size-h4 line-height-md">
          <Trans> Oops! It looks like you followed the wrong link. If you think this is an error, please let us know. </Trans>
        </p>
      </div>
    </div>
  )

}


export default PageNotFound
