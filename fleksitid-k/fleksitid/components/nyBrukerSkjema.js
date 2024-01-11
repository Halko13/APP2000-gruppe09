'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

/* Importer textfields */
import FormPropsTextFields from "../components/adminANR-TF";
import IconLabelButtons from "../components/nyBrukerButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 0.5 }} alignItems={'center'} style={{ margin: 'auto' }}>
      <Box display="grid" gridTemplateColumns="repeat(1fr, 1fr)" gap={2}>
        <Box gridColumn="span 1">
          <Item>
            <FormPropsTextFields />
          </Item>
        </Box>
        <Box gridColumn="span 1">
          <Item>
            <IconLabelButtons />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
