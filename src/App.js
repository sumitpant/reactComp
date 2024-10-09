import './App.css';
import {  useNavigate } from 'react-router-dom';

import { Button, Tooltip } from '@mui/material';

function App() {
 const navigate= useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
          <Tooltip title="InfiniteScroll using intersection Observer">
            <Button variant="contained" onClick={()=>{ navigate("/infinte-intersecton");}}>InfiniteScroll </Button>
          </Tooltip>

        </div>

      </header>
    </div>
  );
}

export default App;
