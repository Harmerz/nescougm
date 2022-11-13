import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('Haikal');
  const HandleClick = () => {
    setName('Hilmi');
  };
  return (
    <div>
      <div className='text-bold uppercase text-red-600 justify-center justi'>{name}</div>
      <button type="submit" onClick={HandleClick} >submit</button>
    </div>
    
    
  )
}
