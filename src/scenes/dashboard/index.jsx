import { Box ,Button,IconButton,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../Theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import GeoGraphy from "../../components/GeoGraph";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
const Dashboard =()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return( <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center"> 
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
        </Box>
        <Box>
 
        </Box>
    </Box>
    )
}
export default Dashboard;