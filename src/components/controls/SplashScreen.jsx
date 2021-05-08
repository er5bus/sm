import {useEffect} from "react"

const SplashScreen = () => {
  useEffect(() => {
    const splashScreen = document.getElementById("js-splash-screen")

    // Show SplashScreen
    splashScreen.classList.remove("d-none")

    return () => {
      splashScreen.classList.add("d-none")
    }
  })
  
  return null
}


export default SplashScreen
