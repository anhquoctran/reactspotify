import "antd/dist/antd.css";
import "styles/global.css"
import { RecoilRoot } from 'recoil';
import "./i18n";

import Home from "pages";


function App(): JSX.Element {
    
    return (
        <RecoilRoot>
        <div className="App">
            <Home />
        </div>
         </RecoilRoot>
      );
};

export default App;
