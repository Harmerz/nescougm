import { Button } from '../../../element/button'

/* eslint-disable jsx-a11y/label-has-associated-control */
export function Pembayaran() {
  return (
    <div className="flex flex-col mt-10 w-[98%] h-4/5 bg-bg-01 rounded-xl p-6 md:p-12">
      <div
        className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xl sm:text-2xl transition-all font-bold font-jost uppercase`}
      >
        Pembayaran
      </div>
      <div className="lg:flex-row flex mt-6 flex-col">
        <div className="lg:w-1/2 text-white font-jost text-xs md:text-base">
          <p>
            Pembayaran lomba ..... sebesar Rp.,,,,,, dapat dibayarkan melalui rekening di bawah ini:
          </p>
          <p>1. Mandiri 123556778 atas nama ..... </p>
          <p>2. BCA 5462892 atas nama ...</p>
          <p>
            Setelah berhasil melakukan pembayaran, harap melampirkan bukti pembayaran pada tempat
            yang telah disediakan.
          </p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-end items-start">
          <div className="w-full flex justify-end mt-10 lg:mt-0">
            <div className="justify-end w-full lg:w-4/5">
              <form>
                <label>
                  <input
                    type="file"
                    className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-l-lg file:border-0
                    file:text-sm file:font-medium
                    file:bg-c-01 file:text-c-00
                    hover:file:cursor-pointer hover:file:bg-c-02
                    border-[1px] rounded-l-xl text-white border-c-02 bg-c-00 w-full
                  "
                  />
                </label>
              </form>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex w-1/4 justify-center mt-10 lg:mt-4 justify-items-end">
              <Button type="primary" size="sm" animation="main">
                Submit
              </Button>
            </div>
          </div>
          <div className="w-full justify-end mt-10 lg:mt-4">
            <p className="justify-end flex text-xs md:text-base">
              <span className="text-c-01">Status</span>{' '}
              <span className="text-white">: Belum terverifikasi</span>
            </p>
            <p className="flex text-white justify-end text-[8px] md:text-xs">
              Proses verifikasi akan dilakukan paling lambat 2x24 jam.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
