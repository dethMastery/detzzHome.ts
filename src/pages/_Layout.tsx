import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

interface Props {
  children: string | JSX.Element | JSX.Element[] 
}

const Layout = (props: Props) => {
  return (
    <div className="bg-pastel-black text-whitesmoke w-full min-h-screen">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout