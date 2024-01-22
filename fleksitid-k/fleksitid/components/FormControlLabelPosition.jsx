// FormControlLabelPosition.jsx
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition({ checked, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="ErAdmin"
          control={<Checkbox checked={checked} onChange={handleChange} sx={{ fontSize: '50px' }} />}
          label={<span style={{ fontSize: '25px' }}>Adminbruker</span>}
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}
