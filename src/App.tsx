import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import Like from './components/Like';

function App() {
  const [alertVisable, setAlertVisability] = useState(false);
  
  return (
    <div>
      {alertVisable && <Alert onClose={() => setAlertVisability(false)}>DANGER</Alert>}
      <Button color='danger' onClick={() => setAlertVisability(true)}>
        yeah
      </Button>
      <Like onClick={() => console.log('You liked it')
      }/>
    </div>
  );
}

export default App;
