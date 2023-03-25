import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import {Route,Routes } from "react-router-dom";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dash from "./pages/Dash";
 import Team from "./pages/Team";
import Invoices from "./pages/Invoices";
import Contacts from "./pages/Contacts";
// import Bar from "./pages/Bar";
import Form from "./pages/Form";
// import Line from "./pages/Line ";
// import Calender from "./pages/Calender ";



function App() {
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
          <Route path="/" element={<Dash/>}/>
          <Route path="/Team" element={<Team/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/Invoices" element={<Invoices/>}/>
          <Route path="/Form" element={<Form/>}/>
          {/* <Route path="/Bar" element={<Bar/>}/> */}
          {/* <Route path="/Line" element={<Line/>}/> */}
          {/* <Route path="/Faq" element={<Faq/>}/> */}
          {/* <Route path="/calender" element={<Calender/>}/> */}
        </Routes>
      </main>


    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
