import Sidebar from "./sidebar"

export default function MainContainer({children}) {
  return (
    <>
	  <Sidebar />
      <div>{children}</div>
    </>
  ) 
}