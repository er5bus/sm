import React from "react"
import ContentLoader from "react-content-loader"

const MenuLoader = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={200}
    viewBox="0 0 100% 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5%" y="20" rx="0" ry="0" width="30%" height="90" /> 
    <rect x="40%" y="32" rx="0" ry="0" width="40%" height="8" /> 
    <rect x="40%" y="52" rx="0" ry="0" width="40%" height="8" /> 
        
    <rect x="5%" y="130" rx="0" ry="0" width="90%" height="15" /> 
    <rect x="5%" y="160" rx="0" ry="0" width="90%" height="15" /> 
  </ContentLoader>
)

export default MenuLoader
