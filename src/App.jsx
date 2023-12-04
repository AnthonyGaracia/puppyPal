import { useState } from 'react'
import {puppyList} from './data.js'
console.log(puppies)  
import './App.css'

function App() {

const [puppies, setPuppies] = useState(puppyList);

      <div>
        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }

      </div>
    
 return  
} 

export default App


