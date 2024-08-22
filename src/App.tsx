import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisable, setAlertVisability] = useState(false);
  return (
    <div>
      {alertVisable && <Alert>DANGER</Alert>}
      <Button color='danger' onClick={() => setAlertVisability(true)}>
        yeah
      </Button>
      <Button color='secondary' onClick={() => console.log('clicked')}>timmy</Button>
    </div>
  );
}

export default App;
