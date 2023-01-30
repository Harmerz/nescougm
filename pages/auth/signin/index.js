import { DefaultLayoutAuth } from '../../../components/layoutAuth'
import { SignIn } from '../../../components/pages/auth/signin'

export function SignInPage() {
  return (
    <DefaultLayoutAuth title="Sign In - NESCO UGM 2023">
      <SignIn />
    </DefaultLayoutAuth>
  )
}

export default SignInPage
