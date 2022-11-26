import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const colors = [
    {
      label: 'Lime',
      value: 'lime',
    },
    {
        label: 'Lavender',
        value: 'lavender',
    },
  {
    label: 'Crimson',
    value: 'crimson',
  },
  {
     label: 'Darkblue',
    value: 'darkblue',
  },
  {
    label: 'Teal',
    value: 'teal',
  },
  {
    label: 'Rebecca Purple',
    value: 'rebeccapurple',
  },
  {
    label: 'Ghost White',
    value: 'ghostwhite',
  },
  {
    label: 'Aqua Marine',
    value: 'aquamarine',
  },
  {
    label: 'Alice Blue',
    value: 'aliceblue',
  },
];

export default function SelectTextFields() {
  const [colo, setColor] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={colo}
          onChange={handleChange}
          backgroundColor="blue"
        >
          {colors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
       </TextField>
      </div>
    </Box>
    <div>
        <h1 style={{marginLeft:550}}>Color Changer</h1>
    </div>
    <div className='container' style={{padding:200,marginLeft:300,marginTop:100,backgroundColor:colo,border:'2px solid black',borderRadius:15}}>
    
    </div>
    </>
  );
}
