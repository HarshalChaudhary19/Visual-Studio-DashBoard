import {Box,useTheme,Typo, Typography} from "@mui/material" ;
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../Theme";

const FAQ=()=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page"/>
            {/* FirstBox */}
            <Accordion> 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit
                    </Typography> 
                </AccordionDetails>
            </Accordion>
            {/* SecondBox */}
            <Accordion> 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit
                    </Typography> 
                </AccordionDetails>
            </Accordion>
            {/* ThirdBox */}
            <Accordion> 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        Your Favoirite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit
                    </Typography> 
                </AccordionDetails>
            </Accordion>
            {/* ForthBox */}
            <Accordion> 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit
                    </Typography> 
                </AccordionDetails>
            </Accordion>
            {/* FifthBox */}
            <Accordion> 
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit
                    </Typography> 
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;
