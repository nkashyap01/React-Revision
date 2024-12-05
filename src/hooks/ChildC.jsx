import React, { useContext } from 'react' 
import { ThemeContext } from '../App';
  


const ChildC = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  function handleClick(){
 if(theme=='light'){
  setTheme("dark")
 }
 else{
  setTheme("light");
 }
  }
  return (
    <div>
<button onClick = {handleClick} className=" bg-blue-500">Change Button</button>
    </div>
  )
}

export default ChildC