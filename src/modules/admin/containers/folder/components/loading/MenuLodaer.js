import React from "react"
import ContentLoader from "react-content-loader"

const MenuLoader = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={350}
    viewBox="0 0 100% 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5%" y="20" rx="0" ry="0" width="20%" height="50" /> 
    <rect x="30%" y="32" rx="0" ry="0" width="40%" height="8" /> 
    <rect x="30%" y="52" rx="0" ry="0" width="40%" height="8" /> 
    
    <rect x="70%" y="87" rx="3" ry="3" width="25%" height="32" /> 
    <rect x="40%" y="87" rx="3" ry="3" width="25%" height="32" /> 
    <rect x="70%" y="136" rx="3" ry="3" width="25%" height="32" /> 
    
    <rect x="5%" y="201" rx="0" ry="0" width="90%" height="25" /> 
    <rect x="5%" y="237" rx="0" ry="0" width="90%" height="25" /> 
    <rect x="5%" y="280" rx="0" ry="0" width="90%" height="25" />
  </ContentLoader>
)

export default MenuLoader
