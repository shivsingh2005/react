
import { useState } from "react"
function App(){
  const [color,setcolor]=useState("olive")
  return(
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify center gap-3 shadow-lg bg-white">
          <button
          onClick={()=>{ setcolor("red")}}
           className="outline-none px-4 "
          style={{backgroundColor:"red"}}>red</button>
          <button
          onClick={()=>{ setcolor("yellow")}}
           className="outline-none px-4 "
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>{ setcolor("green")}} className="outline-none px-4 "
          style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>{ setcolor("blue")}} className="outline-none px-4 "
          style={{backgroundColor:"blue"}}>blue</button>
          <button  onClick={()=>{ setcolor("black")}} className="outline-none px-4 "
          style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>{ setcolor("white")}} className="outline-none px-4 "
          style={{backgroundColor:"white"}}>white</button>
        </div>
        

      </div>
    </div>
    
  )
}
export default App