import NavBar from './components/NavBar/NavBar';
import React from 'react';
import './App.css'
import {action,original,comedy, trending, Horror, Romance } from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { BrowserRouter as Router,Route } from 'react-router-dom';



function App() {
    return(
        <div>
          

       <NavBar/>
       <Banner/>
       <RowPost url={trending} title='trending' />
       <RowPost url={original} title='Netflix Original' isSmall />
       <RowPost url={action} title='Action' isSmall />
       <RowPost url={comedy} title='Comedy' isSmall />
       <RowPost url={Horror} title='Horror' isSmall />
       <RowPost url={Romance} title='Romantic' isSmall />
       <RowPost url={comedy} title='Comedy' isSmall />
       
       </div>
    
    ) 
}

export default App;
