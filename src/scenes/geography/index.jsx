import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoGraphy from "../../components/GeoGraph";

const Geography=()=>{
    return (
        <Box m="20px">
            <Header title="GeoGraphy Chart" subtitle="A Geo Chart"/>
            <Box height="75vh">
                <GeoGraphy/>
            </Box>
        </Box>
    )
}

export default Geography;