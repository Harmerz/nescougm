import { DefaultLayoutAuth } from '../../../components/layoutAuth'
import { EnterPassword } from '../../../components/pages/auth/resetpassword2/EnterPassword'

export function ResetPassword2Page() {
  return (
    <DefaultLayoutAuth title="Reset Password - NESCO UGM 2023">
      <EnterPassword />
    </DefaultLayoutAuth>
  )
}

export default ResetPassword2Page
