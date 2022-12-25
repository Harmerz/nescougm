import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { Button } from '../components/element/Button';
import { BackToTop } from '../components/element/BackToTop';
import { DefaultLayout } from '../components/layout';

export default function SignIn() {
  return (
    <DefaultLayout title="Sign In - NESCO UGM 2023">
    <div className='justify-center bg-gradient-to-br from-bg-00 to-bg-01 h-[100vh] flex items-center'>
      <div className='text-7xl font-bold uppercase text-white'>SignIn</div>
      <BackToTop />
    </div>
      
    </DefaultLayout>
    
  )
}
