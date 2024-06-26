export function Verifikasi() {
  return (
    <div className="flex flex-col h-[100vh] max-w-[330px] sm:max-w-[535px] justify-center mx-auto gap-[10px]">
      <div className="text-center text-white flex flex-col justify-center items-center bg-gradient-to-b from-c-02 to-c-01 p-[2px] md:p-[3px] rounded-[8.07px]">
        <div className="bg-c-00 rounded-[8.07px]">
          <div className="bg-c-05/40 rounded-[8.07px] flex flex-col sm:gap-[36px] py-[40.5px] px-[50.5px]">
            <h1 className="font-jost font-bold text-[30px] sm:text-[36px] md:text-[42px] sm:leading-[40px]">
              Email Anda Belum Terverifikasi
            </h1>
            <p className="font-poppins text-[12px] sm:text-[16px] sm:leading-[36.8px]">
              Periksa inbox akun email anda untuk mendapatkan link verifikasi. Link hanya akan aktif
              selama 6 jam.
            </p>
            <p className="font-poppins text-[12px] sm:text-[16px] sm:leading-[36.8px]">
              Jika Ini bukan Anda yang mendaftar, Hubungi Admin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verifikasi
