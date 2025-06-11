import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/card';

function App() {
  let obj = {
    name: 'John',
    age: 30
  }
  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className="bg-pink-950 text-pink-300 rounded-2xl p-5 text-center">
        Tailwind Test
      </h1>
      <div className='flex'>
        <Card className = "flex-none" username='Sunset in Mountains' img='https://media.istockphoto.com/id/155288168/photo/max-patch-sunset.jpg?s=612x612&w=0&k=20&c=kS0FyNaQguD3PhpYnvfl6SbYtJw0CiItKDxx5lDxGU4=' />
        <Card className = "flex-1" username='Moon at Forest' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPxBZ7EFdblmNwwCInpLVLVpiFIhbfz9gdg&s' />
        <Card className = "flex-2" username='Stars at Beach' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfFQV3ScmCAKjwIAeb270U0RxIN47E9iRLg&s' />
      </div>

    </>
  );
}

export default App;
