import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1:"",
    input2:"",
    password:"",
    checkbox:"",
    color:"", 
    date: "",
    datetimeLocal: "",
    email:"",
    hidden:"",
    image:"",
    mont:"",
    number:"",
    radio:"",
    range:"",
    reset:"",
    search:"",
    submit:"",
    tel:"",
    time:"",
    url:"",
    week:"",
  });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }
  
  return (
  <div style={{textAlign: "center"}}>
    <h1>Input Test</h1>
    <hr />
    <label htmlFor="in1">Input1</label>
    <input
    id="in1"
    name="input1"
    onChange={(e) => handleInputChange(e)}
    placeholder="Este es el input1"
    type="text" 
    value={inputValue.input1}
    />
    <br />
    <label>
      Input2
      <input 
      name="input2"
      className="mt-2"
      onChange={(e) => handleInputChange(e)}
      placeholder="Este es el input2"
      type="text" 
      value={inputValue.input2}
      />
    </label>
    <br/>
    <label>
      Password
      <input 
      className="mt-2"
      name="password"
      onChange={(e) => handleInputChange(e)}
      type="password" 
      value={inputValue.password}
      />
    </label>
    <br/>
    <label>
    checkbox
      <input 
      className="mt-2"
      name="checkbox"
      onChange={(e) => handleInputChange(e)}
      type="checkbox" 
      value={inputValue.checkbox}
      />
    </label>
    <br/>
    <label>
    color
      <input 
      className="mt-2"
      name="color"
      onChange={(e) => handleInputChange(e)}
      type="color" 
      value={inputValue.color}
      />
    </label>
    <br/>
    <label>
    date
      <input 
      className="mt-2"
      name="date"
      onChange={(e) => handleInputChange(e)}
      type="date" 
      value={inputValue.date}
      />
    </label>
    <br/>
    <label>
    datetime-local
      <input 
      className="mt-2"
      name="datetime-local"
      onChange={(e) => handleInputChange(e)}
      type="datetime-local" 
      value={inputValue.datetimeLocal}
      />
    </label>
    <br/>
    <label>
    email
      <input 
      className="mt-2"
      name="email"
      onChange={(e) => handleInputChange(e)}
      type="email" 
      value={inputValue.email}
      />
    </label>
    <br/>
    <label>
    hidden
      <input 
      className="mt-2"
      name="hidden"
      onChange={(e) => handleInputChange(e)}
      type="hidden" 
      value={inputValue.hidden}
      />
    </label>
    <br/>
    <label>
    image
      <input 
      className="mt-2"
      name="image"
      onChange={(e) => handleInputChange(e)}
      type="image" 
      value={inputValue.image}
      />
    </label>
    <br/>
    <label>
    month
      <input 
      className="mt-2"
      name="month"
      onChange={(e) => handleInputChange(e)}
      type="month" 
      value={inputValue.month}
      />
    </label>
    <br/>
    <label>
    number
      <input 
      className="mt-2"
      name="number"
      onChange={(e) => handleInputChange(e)}
      type="number" 
      value={inputValue.number}
      />
    </label>
    <br/>
    <label>
    radio
      <input 
      className="mt-2"
      name="radio"
      onChange={(e) => handleInputChange(e)}
      type="radio" 
      value={inputValue.radio}
      />
    </label>
    <br/>
    <label>
    range
      <input 
      className="mt-2"
      name="range"
      onChange={(e) => handleInputChange(e)}
      type="range" 
      value={inputValue.range}
      />
    </label>
    <br/>
    <label>
    reset
      <input 
      className="mt-2"
      name="reset"
      onChange={(e) => handleInputChange(e)}
      type="reset" 
      value={inputValue.reset}
      />
    </label>
    <br/>
    <label>
    search
      <input 
      className="mt-2"
      name="search"
      onChange={(e) => handleInputChange(e)}
      type="search" 
      value={inputValue.search}
      />
    </label>
    <br/>
    <label>
    submit
      <input 
      className="mt-2"
      name="submit"
      onChange={(e) => handleInputChange(e)}
      type="submit" 
      value={inputValue.submit}
      />
    </label>
    <br/>
    <label>
    tel
      <input 
      className="mt-2"
      name="tel"
      onChange={(e) => handleInputChange(e)}
      type="tel" 
      value={inputValue.tel}
      />
    </label>
    <br/>
    <label>
    time
      <input 
      className="mt-2"
      name="time"
      onChange={(e) => handleInputChange(e)}
      type="time" 
      value={inputValue.time}
      />
    </label>
    <br/>
    <label>
    url
      <input 
      className="mt-2"
      name="url"
      onChange={(e) => handleInputChange(e)}
      type="url" 
      value={inputValue.url}
      />
    </label>
    <br/>
    <label>
    week
      <input 
      className="mt-2"
      name="week"
      onChange={(e) => handleInputChange(e)}
      type="week" 
      value={inputValue.week}
      />
    </label>
    </div>
  )
}

export default App