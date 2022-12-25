import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Button } from '../components/element/Button';
import { BackToTop } from '../components/element/BackToTop';
import { DefaultLayout } from '../components/layout';

export default function Merch() {
  return (
    <DefaultLayout title="Merch - NESCO UGM 2023">
    <div className='h-[200vh]'>
      <div className='text-bold uppercase text-red-600 justify-center justi'>Haikal</div>
      <Button color='primary'> Button </Button>
      <Button color='secondary'> Button </Button>
      <BackToTop />
    </div>
      
    </DefaultLayout>
    
  )
}
