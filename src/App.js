import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, /* useNavigate */ } from 'react-router-dom';
import Nav from './components/Nav/Nav';
// import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import Favorites from './components/Favorites/Favorites';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  // const EMAIL = 'gastonmonzon3@gmail.com';
  // const PASSWORD = '123456';

  // function login(userData) {
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true);
  //     navigate('/home');
  //   }
  // }

  // useEffect(() => { // Corre siempre que se cambie página
  //   !access && navigate('/'); // Sí el acceso es falso te redirije a /
  // }, [access, navigate]);

  function onSearch(id) {
    fetch(`http:///rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!')
        }
      });
  }

  const onClose = (id) => {
    const filteredCharacters = characters.filter((character) => {
      return character.id !== id
    })
    setCharacters(filteredCharacters);
  }

  return (
    <div className='App'>
      <div>
        {pathname !== '/' && <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        {/* <Route exact path='/' element={<Form login={login} />} /> */}
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
