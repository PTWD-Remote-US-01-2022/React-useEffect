import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');

  //useEffect() is function that will executes as soon as your component loads
  //There's 3 way to run UseEffect hook

  // First way - this will execute everytime your re render you component
  useEffect(() => {
    console.log('I render everytime when any state changes');
  });

  //Second way - this will execute only when your data2 change
  useEffect(() => {
    console.log('Data2 is changed');
  }, [data2]);

  //Third way - this will execute only when
  useEffect(() => {
    console.log('Loading only 1 time when page loads');
  }, []);

  return (
    <div>
      <button onClick={() => setData(() => 'Movies')}>Movies</button>
      <button onClick={() => setData(() => 'Books')}>Books</button>
      <button onClick={() => setData2(() => 'Games')}>Games</button>
      <input
        type="text"
        onChange={(e) => setData(() => e.target.value)}
        value={data}
      />
      <p>{data}</p>
      <p>{data2}</p>

      <button>
        <Link to="/movies">Go to movies</Link>
      </button>
    </div>
  );
};

export default Home;

//componentDidMount() - This function executes as soon as the component loads
//componentDidUpdate() - This function executes as soon as the state changes
//componentWillUnmount() - This function executes if you need clean up your functions
