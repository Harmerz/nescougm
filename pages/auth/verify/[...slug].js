import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { DefaultLayoutAuth } from '../../../components/layoutAuth'
import { Verify } from '../../../components/pages/auth/verify'

export function Verifikasi() {
  const router = useRouter()
  const slug = router.query.slug || []

  const VerifikasiOne = (thisSlug) => {
    axios
      .get(`https://be-nesco-2023.vercel.app/api/verify/${thisSlug[0]}/${thisSlug[1]}`)
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
    if (slug[0] !== undefined) VerifikasiOne(slug)
  }, [slug])

  return (
    <DefaultLayoutAuth title="Reset Password - NESCO UGM 2023">
      <Verify />
    </DefaultLayoutAuth>
  )
}

export default Verifikasi
