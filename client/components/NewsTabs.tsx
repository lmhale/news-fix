import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import {Box, Container} from "@mui/material";
import { useGetTopHeadlinesQuery } from "../features/News/redux/news-api-slice";
import {GetNewsData} from '../features/News/NewsLogic'

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function NewsTabs() {


  const tabCategories = {
    0: "general",
    1: "business",
    2:"technology",
    3: "health",
    4: "science",
    5: "sports",
    6: "entertainment"
  };
  const [selectedTab, setSelectedTab] = React.useState(0);

  let decodedCategory = 
  tabCategories[selectedTab];

  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }


  return (
  <>
      <Box sx={{
        width:'20%',
        height:'100vh',
        marginTop: '15px'
      }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        indicatorColor='secondary'
        value={selectedTab}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab  label="general" {...a11yProps(0)} />
        <Tab label="business" {...a11yProps(1)} />
        <Tab label="technology" {...a11yProps(2)} />
        <Tab label="health" {...a11yProps(3)} />
        <Tab label="science" {...a11yProps(4)} />
        <Tab label="sports" {...a11yProps(5)} />
        <Tab label="entertainment" {...a11yProps(6)} />
      </Tabs>
      </Box>

      <Box sx={{
        width:'80%',
        marginLeft:'10px',
        padding:'15px'
      }}>
     
      <GetNewsData category={decodedCategory} />
      
      </Box>

    </>
  );
}
