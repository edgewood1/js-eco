import React from 'react';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styled from '@emotion/styled';

import { resetTotal } from '../helperFiles/sliderCalculator';
import {AppData, Context} from '../index'

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  max-width: 700px;
  width: 100%;
`;

const StyledTextfield = styled(TextField)`
  width: 85px;
  
  margin-right: 10px;
  background: ${(props) => (props.value == 100 ? `#FFEBCD` : `#F0F8FF`)};
`;
/**
 * FooterRow appends to the table's bottom
 * This single row conains 2 buttons, an alert, and a textfield that displays total for all entities
 * @identifier {boolean} alert - helps define alert lifecycle
 */
export default function FooterRow() {
  const appContext = React.useContext(Context);
  const [alert, setAlert] = React.useState(false)
 
  const clear = () => {
    const clearedData = appContext?.data.map((e: AppData) => {
      return { id: e.id, value: 0, name: e.name };
    });
    resetTotal();
    appContext?.changeData(clearedData);
    appContext?.changeTotal(0);
  };
 
  const onSubmit = () => {  
    setAlert(true)
  }

  const checkDisabled = () => {
    if (appContext) {
      if (appContext?.total < 100 && alert) setAlert(false)
      return appContext?.total < 100 || alert 
    }
    return false;
  }
  return (
    <BottomRow>
      <div>
        <Button disabled={checkDisabled()}  onClick={onSubmit} style={{ marginRight: '20px' }} variant="outlined">
          Submit
        </Button>
        <Button onClick={clear} variant="outlined">
          Reset 
        </Button>
      </div>
      {(appContext?.total === 100) ? 
        <Alert>
          {!alert ? 'You may submit' : 'You\'ve submitted'}
        </Alert>: <></>}
      <StyledTextfield 
        label="total"  
        InputProps={{
          readOnly: true,
        }}
        value={appContext?.total} />
    </BottomRow> 
  );
}
