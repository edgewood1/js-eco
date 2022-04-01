import React from 'react';
import { render } from 'react-dom';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';

import BodyTable from './Components/table';
import FooterRow from './Components/footerRow';
import importedData from './helperFiles/data'

export interface AppData {
  id: string;
  name: string;
  value: number;
}

export interface MyContextType {
  total: number,
  data: AppData[],
  changeData: React.Dispatch<
  React.SetStateAction<AppData[] | undefined>>,
  changeTotal: React.Dispatch<
  React.SetStateAction<number>>,
}
const StyledToolbar = styled(Toolbar)`
  background: lightblue;
  marginBottom: 20px;
  color: gray;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

export const Context = React.createContext<MyContextType |null >(null);

/**
 * App creates basic layout and distributes table row data / total
 * @identifier {number} total - total values for all 5 rows
 * @identifier {object} data - defined by AppData 
 */
function App() {
  const [total, changeTotal] = React.useState(0);
  const [data, changeData] = React.useState(importedData);
  const appcontext: MyContextType = {
    total, data, changeData, changeTotal
  }
 
  return (
    <div style={{width: '100%', height: '100%'}}>
      <StyledToolbar> Build Your Own Portfolio </StyledToolbar>
      <InnerWrapper>
        <Context.Provider value={appcontext}>
          <BodyTable />
          <FooterRow />
          </Context.Provider>
      </InnerWrapper>
    </div>
  );
}

render(<App />, document.getElementById('root'));
