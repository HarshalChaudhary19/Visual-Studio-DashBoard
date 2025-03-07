import {Box,IconButton,useTheme} from "@mui/material";
import { useContext } from "react";
import { tokens } from "../../Theme";
import { ColorModeContext } from "../../Theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
const Topbar=()=>{
    //Anytime we want to use color mode thats in mui
    //we can use it from useTheme
    const theme =useTheme();
    const colors=tokens(theme.palette.mode);
    const colorMode=useContext(ColorModeContext);
    return (
        //box component is like div component but we can put css properties directly into box componenets
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* {SEARCH BAR} */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
            </Box>
            {/*ICONS SECTION */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode==='dark'?(
                        <DarkModeOutlinedIcon/>
                    ):(
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}
export default Topbar;