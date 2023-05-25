import  Button from "react-bootstrap/Button";  
import { useState, useEffect } from "react";
import Display from "../Display/Display";
// import './DrumPad.css'


export default function DrumPad ({src,id,keyId} ){       
   
   
  const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const[ text, setText] = useState(" ")
    
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() && setText(id) : audio.pause() && setText('');
       

 
        
        window.addEventListener("keydown", (e) => {
          const key = e.key.toUpperCase();
          
          
          const pad = document.getElementById(key);
          const padParent = pad.parentElement.getAttribute('id')
    
    
          if (!pad) {
            return null;
          }
          else {
    
            pad.play();
            setText(padParent)
        
    
    
    
    
          }
    
        
      })
      
      document.getElementById('display').innerText = text
    
       
      },
      [playing, audio, text, setText])
    
  
    useEffect(() => {

      audio.addEventListener('ended', () => setPlaying(false));
     
      return () => {
        
        audio.removeEventListener('ended', () => setPlaying(false));
        
      };
    })
    return [playing, toggle]
  }
  const Player = ({url} ) => {
    const [playing, toggle] = useAudio(url);
   
    return(
      <Button className="drum-pad btn-dark btn-lg" onClick={toggle} size="lg"id={id} >
      <audio className="clip" preload="metadata" src={src} type="audio/mp3" id={keyId}></audio>
      {keyId}
   </Button>
  
    )
    }
     
    
    

  


   

   

   
  return(

   <Player className="m-auto shadow-lg" url={src} />
 
  
  )

    
}
   