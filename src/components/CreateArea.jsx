import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const[click,setclick]=useState(false);
  const[notes,setnotes]=useState({
    title:"",
    content:" ",
  });
  function change(event){
    const{name,value}=event.target;
    setnotes(prevNotes=>{
         return{
          ...prevNotes,
          [name]:value
         };
    });
     
  }
  function submitt(event){
    props.onadd(notes);
    event.preventDefault();
    setnotes({
      title:"",
      content:"",
    })
  }
  function zoon(){
    setclick(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {
          click&&<input onChange={change} name="title" placeholder="Title" value={notes.title} />
        }
        <textarea onClick={zoon} onChange={change}   value={notes.content} name="content" placeholder="Take a note..." rows={click?4:1} />
        <Zoom in={click}>
        <Fab onClick={submitt} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
