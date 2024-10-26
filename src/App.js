import Topbar from "./scenes/Global/Topbar";
import { ColorModeContext,useMode } from "./Theme";
import { CssBaseline ,ThemeProvider} from "@mui/material";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/Global/Sidebar";
import Team from "./scenes/Team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calender from "./scenes/calender";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
// import Geography from "./scenes/geography";

//baseline will set the css to default 
//ThemePRovider will be helpfull for providing themes
function App(){
  const [theme,colorMode]=useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <Sidebar/>
      <main className="content">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/calender" element={<Calender/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/line" element={<Line/>}/>
          {/* <Route path="/geography" element={<Geography/>}/> */}
        </Routes>
        </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
} 
export default App;