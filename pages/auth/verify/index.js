import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { DefaultLayoutAuth } from '../../../components/layoutAuth'
import { Verify } from '../../../components/pages/auth/verify'

export function Verifikasi() {
  const router = useRouter()
  const slug = router.query

  const VerifikasiOne = (thisSlug) => {
    axios
      .get(`https://be-nesco-2023.vercel.app/api/verify/${thisSlug.id}/${thisSlug.token}`)
      .then(() => {
        setTimeout(() => {
          router.push('/auth/signin')
        }, 3000)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    console.log(slug)
    if (slug.id !== undefined) {
      VerifikasiOne(slug)
    }
  }, [slug])

  return (
    <DefaultLayoutAuth title="Reset Password - NESCO UGM 2023">
      <Verify />
    </DefaultLayoutAuth>
  )
}

export default Verifikasi
