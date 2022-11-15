import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Button from '../components/Button'
import BackToTop from '../components/BackToTop';

export default function Home() {
  const [name, setName] = useState('Haikal');
  const HandleClick = () => {
    setName('Hilmi');
  };
  return (
    <div className='h-[200vh]'>
      <div className='text-bold uppercase text-red-600 justify-center justi'>{name}</div>
      <button type="submit" onClick={HandleClick} >submit</button>
      <Button color='primary'> Button </Button>
      <Button color='secondary'> Button </Button>
      <BackToTop />
    </div>
    
    
  )
}
