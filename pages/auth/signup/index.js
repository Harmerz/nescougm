import { DefaultLayoutAuth } from '../../../components/layoutAuth'
import { SignUp } from '../../../components/pages/auth/signup'

export function SignUpPage() {
  return (
    <DefaultLayoutAuth title="Sign Up - NESCO UGM 2023">
      <SignUp />
    </DefaultLayoutAuth>
  )
}

export default SignUpPage
