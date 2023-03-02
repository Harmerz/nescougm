import { Alert } from '../../../components/pages/auth/alert'

export function VerifikasiPage() {
  return (
    <div className="bg-c-00 h-screen text-white">
      <Alert type="primary" text="Sedang Memproses..." animation="spin" />
      <Alert type="secondary" text="Email sudah terdaftar" />
    </div>
  )
}

export default VerifikasiPage
