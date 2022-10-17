
import * as React from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import CardFormat from './Cards';




export const SearchBar = () => {


  const [state, setstate] = useState(false);

  const [inputs, setinput] = useState({
    keyWord: '',
  });

  const [data, setdata] = useState([]);



// let matchedCompanyID=searchKeyword("Sports");
// const matchedCompanyIDWithoutDuplicates=[...new Set(matchedCompanyID)];
// console.log(matchedCompanyIDWithoutDuplicates);



  const handleChange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    const res= await axios.post(`http://localhost:5000/api/search/displayadd`, {
      keyWord: inputs.keyWord,
    }).catch((err) => {console.log(err)});

    const data= await res.data;

    return data;
  };

  const handleClick = (e) => {

    sendRequest()
    .then((data)=>{
      setdata(data);
    }).then(()=>setstate(true))
    .catch((err)=>{console.log(err);
    });
      
  }


  return (
    <div>
       <Box 
        marginTop={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginLeft={20}
    >
      <Box sx={{ flexGrow: 1 , alignItems:"center"}}>

      <TextField name='keyWord' onChange={handleChange} value={inputs.keyWord} type='text' placeholder='search' margin='normal'/>
        <Button 
           onClick={handleClick}
            type='submit'
            variant ="contained" 
            sx={{borderRadius:3, marginTop:3}} 
            color='warning' >
            Submit</Button>
      </Box>
      {state && <CardFormat
      data={data}
      />}

    </Box>
    </div>
  )
}
