import React, { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Addtask from './components/Addtask';
import Sun from './components/Sun';
import Mon from './components/Mon';
import Tue from './components/Tue';
import Wed from './components/Wed';
import Thu from './components/Thu';
import Fri from './components/Fri';
import Sat from './components/Sat';
import DatePicker, { moment } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [desc, setDesc] = useState(selectedDate.toLocaleDateString("en-US", {weekday: "short"}))
  const save = (e)=>{
      e.preventDefault();
      console.log(day);
  }
  return (
    <div className="App">
      <div className="addTask">
        <form>
          <div className="box-1">
            <input type="text" value={title} className='title' placeholder='Title' onChange={(e)=>{setTitle(e.target.value);console.log(title);}}/>
            <input type="text" value={desc} className='desc' placeholder='Description' onChange={(e)=>{setDesc(e.target.value);console.log(desc);}}/>
          </div>
          <div className="box-2">
            <DatePicker minDate={new Date()}
              selected={selectedDate}  onChange={(date) => {
                setSelectedDate(date)
                setDay(selectedDate.toLocaleDateString("en-US", {weekday: "short"}))
              }} />
            <button onClick={save}>Save</button>
          </div>
        </form>
      </div>
      <nav>
        <ul>
          <li><NavLink to={'/sun'}>SUN</NavLink></li>
          <li><NavLink to={'/mon'}>MON</NavLink></li>
          <li><NavLink to={'/tue'}>TUE</NavLink></li>
          <li><NavLink to={'/wed'}>WED</NavLink></li>
          <li><NavLink to={'/thu'}>THU</NavLink></li>
          <li><NavLink to={'/fri'}>FRI</NavLink></li>
          <li><NavLink to={'/sat'}>SAT</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Addtask />} />
        <Route path='/sun' element={<Sun title={title} desc={desc}/>} />
        <Route path='/mon' element={<Mon />} />
        <Route path='/tue' element={<Tue />} />
        <Route path='/wed' element={<Wed />} />
        <Route path='/thu' element={<Thu />} />
        <Route path='/fri' element={<Fri />} />
        <Route path='/sat' element={<Sat />} />
      </Routes>
    </div>
  );
}

export default App;
