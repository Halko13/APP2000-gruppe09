'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("noe sjedde" + event);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* Wrap the entire Tabs with a single Link */}
        
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Link href="/admin" passHref>{/* Now, each Tab is a direct child of Tabs */}
              <Tab label="Item One" {...a11yProps(0)} />
            </Link>
            <Link href="/admin/nyBruker" passHref>
              <Tab label="Item Two" {...a11yProps(1)} />
            </Link>
          </Tabs>
        
      </Box>
    </Box>
  );
}