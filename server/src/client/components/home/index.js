import React from 'react';

const App = () => {
    const clickMe = () => {
        alert('hi i am clicked');
    }
return <div>
    <div>{'Hello there it is server side rendering mock.....'}</div>
    <button onClick={clickMe}>{'Press Me'}</button>
</div>
}

export default App;