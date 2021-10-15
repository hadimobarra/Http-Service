import React, { useEffect } from 'react';
import { get } from './services/HttpClient';

function App () {

  useEffect(() => {
    get('posts', {
      params: {
        id: 2
      }
    })
    .then(res => console.log(res))
  }, [])


  return (
    <div>
      hi
    </div>
  )
}

export default App
