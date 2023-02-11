import { DefaultLayoutAuth } from '../../../components/layoutAuth'
import { VerifikasiPassword } from '../../../components/pages/auth/verifresetpassword'

export function VerifikasiPasswordPage() {
  return (
    <DefaultLayoutAuth title="Reset Password - NESCO UGM 2023">
      <VerifikasiPassword />
    </DefaultLayoutAuth>
  )
}

export default VerifikasiPasswordPage
