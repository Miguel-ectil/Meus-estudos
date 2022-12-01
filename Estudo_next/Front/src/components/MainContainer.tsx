import Sidebar from "../layout/sidebar"

export default function MainContainer({children}) {
  return (
    <>
	  <Sidebar />
      <div>{children}</div>
    </>
  ) 
}