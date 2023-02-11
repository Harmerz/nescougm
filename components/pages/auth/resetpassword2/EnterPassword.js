import { Button } from '../../../element/button'
import { InputPassword } from '../InputPassword'

export function EnterPassword() {
  return (
    <div className="max-w-[319px] sm:max-w-[362px] mx-auto flex flex-col h-[100vh] justify-center items-center gap-[10px]">
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <form className="flex flex-col justify-center items-center gap-[17px] w-full ">
          <h1 className="text-center font-poppins font-medium text-[24px] text-[#A5A9AD] ">
            Masukkan Password Baru
          </h1>
          <InputPassword />
          <InputPassword Keterangan="Konfirmasi Kata Sandi" />
        </form>
        <Button type="tertiary" size="xl" animation="extra">
          Reset Password
        </Button>
      </div>
    </div>
  )
}

export default EnterPassword
