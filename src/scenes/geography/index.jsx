import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoGraphy from "../../components/GeoGraph";
import {tokens} from "../../Theme";
import { useTheme } from "@mui/material";
const Geography=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
    return (
        <Box m="20px">
            <Header title="GeoGraphy Chart" subtitle="A Geo Chart"/>
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoGraphy/>
            </Box>
        </Box>
    )
}

export default Geography;