import React,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
function App(){
   const[notes,setnotes]=useState([])
   function addit(newnote){
       setnotes(prevNotes=>{
          return [...prevNotes,newnote];
       });
   }
   function deleted(id){
      setnotes(prevNotes=>{
         //Filter is used to return the array except that note which has id which it got
         return prevNotes.filter((note,index)=>{
              return index!==id;
         });
      });     
   }
   return(
      <div>
      <Header />
      <CreateArea onadd={addit} />
      {
         //When we create a note from create area we have to pass into the app.js so because of that we have to add props which can be used to get the note from createapp
         //here that is onadd which we getnotr from and that is passes to addnote which add the notes
         //same goes for delete button we have to know which button is clicked we can access id from app function we get it while mapping
         notes.map((note,index)=>{
           return( <Note key={index} title={note.title} content={note.content} ondel={deleted} id={index}/>
           );
         })
      }
      <Footer />
      </div>
   );
}
export default App;
