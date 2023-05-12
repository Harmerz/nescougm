import Img from 'next/image'

import { Button } from '../../element/button'

export function Merch() {
  return (
    <div className="justify-start  flex items-center flex-col bg-c-00 border-black ">
      <div
        className="bg-clip-text text-transparent bg-gradient-to-l from-c-02 to-c-01
          font-extrabold text-2xl text-center italic font-jost"
      >
        <div className="mt-[111px] sm:mt-[100px] lg:mt-[120px] lg:text-[48px] lg:w-[550px]">
          NESCO 2023
        </div>
        <div className="mt-0 lg:mt-[15px] lg:text-[48px]">Limited Merchendise</div>
      </div>

      <div
        className=" bg-clip-text text-transparent bg-gradient-to-l from-c-01 to-c-02
          font-bold text-lg text-left font-jost w-11/12 h-[35px]
          mt-[67px] ml-[20px] sm:text-[32px]  "
      >
        Paket Bundling
        <p className="font-medium text-xs text-left font-jost ml-[138.78px] mt-[-22px] sm:text-[15px] sm:ml-[230px] ">
          (lebih hemat)
        </p>
      </div>

      <div
        className="justify-start flex flex-col mt-[28px] space-y-[43px]  
          bg-clip-text text-transparent bg-gradient-to-l from-c-01 to-c-02 sm:flex-row
          sm:ml-[20px] sm:space-x-[60px] sm:mr-[25px] lg:space-x-[30px] xl:space-x-[90px]"
      >
        <div>
          <div
            className=" border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-50 
                  sm:mt-[43px] sm:w-[200px] sm:h-[200px] lg:w-[294px] lg:h-[295px] shadow shadow-c-01"
          >
            <p
              className="font-bold text-[16.5px] font-Jost w-[60px] ml-[9px]
                     sm:text-[16px] lg:text-[32px] lg:w-[117px] "
            >
              Paket A
            </p>
            <Img
              className="ml-[99px] mt-[-24px] 
                      sm:ml-[140px] sm:mt-[-16px] sm:scale-125
                      lg:scale-150 lg:ml-[230px] lg:mt-[-33px] "
              width={50}
              height={70}
              src="/Group 838.svg"
            />
            <Img
              className="absolute ml-[5.48px] mt-[-25px] scale-75
                              sm:ml-[10px] sm:mt-[5px] sm:scale-125 
                               lg:scale-150 lg:ml-[30px] lg:mt-[30px]"
              width={80}
              height={65}
              src="/WTshirt.svg"
            />
            <Img
              className="absolute ml-[18.12px] mt-[-14px] scale-75 
                              sm:ml-[40px] sm:mt-[15px] sm:scale-125 
                              lg:scale-150 lg:ml-[60px] lg:mt-[65px]"
              width={85}
              height={65}
              src="/BTshirt.svg"
            />
            <Img
              className="absolute ml-[80px] mt-[18px]
                          sm:ml-[110px] 
                          lg:scale-150 lg:ml-[160px] lg:mt-[50px]"
              width={13}
              height={19}
              src="/plus.svg"
            />
            <Img
              className="ml-[95.5px] mt-[-25px] absolute scale-75
                              sm:scale-125 sm:ml-[135px] 
                              lg:scale-150 lg:ml-[200px] lg:mt-[20px]"
              width={55}
              height={71}
              src="/totebag.svg"
            />
            <Img
              className="mr-[99px] mt-[35px] 
                          sm:scale-125 sm:ml-[8px] sm:mt-[66px]
                          lg:scale-150 lg:mt-[150px]"
              width={50}
              height={70}
              src="/Group 837.svg"
            />
            <div
              className="font-medium text-[7px] font-Jost text-left ml-[43px] mt-[-27px]
                        sm:text-[9.5px] lg:text-[14px] lg:ml-[60px]"
            >
              <p>Kaos(Hitam/Putih) dan Totebag</p>
              <p>(lengan panjang +10K)</p>
            </div>
          </div>
          <div
            className=" border-2 rounded-[5.3px] border-c-02 brigthness-50 
                  h-[49px] text-center mt-[16px] shadow hover:shadow-2xl shadow-c-01"
          >
            <p
              className="font-bold text-xl mt-[7px]
                       sm:text-[25.48px]"
            >
              112K
            </p>
          </div>
        </div>
        <div>
          <div
            className="border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-50 
                   sm:w-[200px] sm:h-[200px] lg:w-[294px] lg:h-[295px] shadow shadow-c-01"
          >
            <p
              className="font-bold text-[16.5px] font-Jost w-[60px] ml-[9px] 
                      lg:text-[32px] lg:w-[117px] "
            >
              Paket B
            </p>
            <Img
              className="ml-[99px] mt-[-24px] 
                      sm:ml-[140px] sm:mt-[-16px] sm:scale-125 
                      lg:scale-150 lg:ml-[230px] lg:mt-[-33px] "
              width={50}
              height={70}
              src="/Group 838.svg"
            />
            <Img
              className="absolute ml-[5.48px] mt-[-25px] 
                              sm:ml-[10px] sm:mt-[5px] sm:scale-125 
                               lg:scale-150 lg:ml-[30px] lg:mt-[30px]"
              width={80}
              height={65}
              src="/WTshirt.svg"
            />{' '}
            <Img
              className="absolute ml-[18.12px] mt-[-14px] 
                              sm:ml-[40px] sm:mt-[15px] sm:scale-125 
                              lg:scale-150 lg:ml-[60px] lg:mt-[65px]"
              width={85}
              height={65}
              src="/BTshirt.svg"
            />
            <Img
              className="absolute ml-[80px] mt-[18px]
                          sm:ml-[110px] 
                          lg:scale-150 lg:ml-[170px] lg:mt-[70px]"
              width={13}
              height={19}
              src="/plus.svg"
            />
            <Img
              className="ml-[90px] mt-[-5px] absolute 
                          sm:scale-125 sm:ml-[130px] sm:mt-[7px] 
                          lg:scale-150 lg:ml-[200px]"
              width={55}
              height={55}
              src="/key.svg"
            />
            <Img
              className="mr-[99px] mt-[35px]
                          sm:scale-125 sm:ml-[6px] sm:mt-[75px] 
                          lg:scale-150 lg:mt-[150px]"
              width={50}
              height={70}
              src="/Group 837.svg"
            />
            <div
              className="font-medium text-[7px] font-Jost text-left ml-[43px] mt-[-27px] 
                      sm:text-[9px] lg:text-[14px] lg:ml-[60px]"
            >
              <p>Kaos(Hitam/Putih) dan </p>
              <p>(Gantungan Kunci)</p>
            </div>
          </div>
          <div
            className=" border-2 rounded-[5.3px] border-c-02 brigthness-50
                  h-[49px] text-center mt-[16px] shadow shadow-c-01"
          >
            <p
              className="font-bold text-xl mt-[7px]
                      sm:text-[24px]"
            >
              88K
            </p>
          </div>
        </div>
        <div>
          <div
            className=" border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-100 
                   sm:w-[200px] sm:h-[200px] lg:w-[294px] lg:h-[295px] shadow shadow-c-01"
          >
            <p
              className="font-bold text-[16.5px] font-Jost w-[60px] ml-[9px]
                      lg:text-[32px] lg:w-[117px]"
            >
              Paket C
            </p>
            <Img
              className="ml-[99px] mt-[-24px] 
                      sm:ml-[140px] sm:mt-[-16px] sm:scale-125 
                      lg:scale-150 lg:ml-[230px] lg:mt-[-33px] "
              width={50}
              height={70}
              src="/Group 838.svg"
            />
            <Img
              className="ml-[9px] mt-[-5px] absolute 
                          sm:scale-125 sm:ml-[20px] sm:mt-[7px] 
                          lg:scale-150 lg:ml-[50px]"
              width={55}
              height={55}
              src="/key.svg"
            />
            <Img
              className="absolute ml-[70px] mt-[18px]
                          sm:ml-[98px] 
                          lg:scale-150 lg:ml-[150px] lg:mt-[30px]"
              width={13}
              height={19}
              src="/plus.svg"
            />
            <Img
              className="ml-[95.5px] mt-[-25px] absolute
                              sm:scale-125 sm:ml-[135px] 
                              lg:scale-150 lg:ml-[200px] lg:mt-[20px]"
              width={55}
              height={71}
              src="/totebag.svg"
            />
            <Img
              className="mr-[99px] mt-[25px] 
                          sm:sacle-125 sm:ml-[-2px] sm:mt-[75px] 
                          lg:scale-150 lg:ml-[15px] lg:mt-[135px]"
              width={60}
              height={70}
              src="/Group 837.svg"
            />
            <div
              className="font-medium text-[7px] font-Jost text-left ml-[43px] mt-[-18px] 
                      sm:text-[10.5px] sm:mt-[-25px] lg:text-[14px] lg:ml-[70px]"
            >
              <p>Gantungan Kunci dan Totebag</p>
            </div>
          </div>
          <div
            className=" border-2 rounded-[5.3px] 
                  h-[49px] text-center mt-[16px] border-c-02 brigthness-50
                  shadow shadow-c-01"
          >
            <p
              className="font-bold text-xl mt-[7px] 
                       sm:text-[24px]"
            >
              60K
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-clip-text text-transparent bg-gradient-to-tl from-c-01 to-c-02
          font-bold text-lg text-left font-jost w-11/12 h-[35px] mt-[55.7px] sm:text-[32px] sm:ml-[20px]"
      >
        Barang Satuan
      </div>

      <div
        className="justify-start flex flex-col mt-[28px] space-y-[43px]  
          bg-clip-text text-transparent bg-gradient-to-r from-c-01 to-c-02 sm:flex-row
          sm:ml-[20px] sm:space-x-[30px] sm:mr-[25px] xl:space-x-[6"
      >
        <div>
          <div
            className=" border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-50 sm:mt-[43px]
                  lg:w-[200px] lg:h-[200px] shadow shadow-c-01 "
          >
            <p
              className="font-bold text-[17.26px] font-Jost text-center 
                      sm:text-[20px]"
            >
              Kaos
            </p>
            <p
              className="w-[60px] font-medium text-[6.6px] font-Jost text-center mt-[0.6px] ml-[40px] 
                      sm:text-[7px] lg:text-[10px] lg:ml-[65px]"
            >
              Cotton Combed 30s
            </p>
            <Img
              className="ml-[99px] mt-[-42px] 
                      lg:scale-150 lg:ml-[135px]"
              width={50}
              height={70}
              src="/Group 838.svg"
            />

            <Img
              className="absolute ml-[28.48px] mt-[-10px]
                              sm:mt-[2px] lg:scale-150 "
              width={66}
              height={59}
              src="/WTshirt.svg"
            />

            <Img
              className="absolute ml-[52.12px] mt-[5px]
                             sm:mt-[10px] lg:scale-150"
              width={72}
              height={68}
              src="/BTshirt.svg"
            />
            <Img
              className="mr-[99px] mt-[40px] lg:scale-125 lg:ml-[5px] lg:mt-[55px]"
              width={50}
              height={70}
              src="/Group 837.svg"
            />
          </div>
          <div
            className=" border-2 rounded-[5.3px] border-c-02 brigthness-50
                  h-[49px] text-center mt-[17px] shadow shadow-c-01"
          >
            <p className="font-bold text-xl">80K</p>
            <p
              className="font-bold text-[5px] mt-[-2.4px] 
                          sm:text-[7px] lg:text-[8px]"
            >
              (lengan panjang +10k)
            </p>
            <p
              className="font-bold text-[5px]
                          sm:text-[7px] sm:mt-[-1px] lg:text-[8px]"
            >
              size chart bisa dilihat{' '}
              <a href="...">
                <u>*disini*</u>{' '}
              </a>
            </p>
          </div>
        </div>
        <div>
          <div
            className=" border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-50
                  lg:w-[200px] lg:h-[200px] shadow shadow-c-01"
          >
            <p className="font-bold text-[17.26px] font-Jost text-center">Botol Minum</p>
            <Img
              className="ml-[99px] mt-[-24px] 
                      lg:scale-125 lg:ml-[140px]"
              width={50}
              height={70}
              src="/Group 838.svg"
            />

            <Img
              className="ml-[50px] mt-[-20px] absolute lg:scale-150 lg:ml-[70px] lg:mt-[10px]"
              width={49}
              height={70}
              src="/BotolMinum.png"
            />
            <Img
              className="mr-[99px] mt-[32px] 
                           lg:scale-125 lg:mt-[76px]"
              width={50}
              height={70}
              src="/Group 837.svg"
            />
          </div>
          <div
            className=" border-2 rounded-[5.3px] border-c-02 brigthness-50
                  h-[49px] text-center mt-[16px] shadow shadow-c-01"
          >
            <p className="font-bold text-xl mt-[7px]">65K</p>
          </div>
        </div>
        <div>
          <div
            className=" border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-50 
                  lg:w-[200px] lg:h-[200px] shadow shadow-c-01"
          >
            <p
              className="font-bold text-[17.26px] font-Jost text-center 
                     lg:text-[20px]"
            >
              Totebag
            </p>
            <Img
              className="ml-[99px] mt-[-24px] 
                     lg:scale-150 lg:ml-[130px] lg:mt-[px]"
              width={50}
              height={70}
              src="/Group 838.svg"
            />
            <Img
              className="ml-[49px] mt-[-30px] absolute 
                          lg:scale-150 lg:ml-[80px] lg:mt-[-5px]"
              width={50}
              height={80}
              src="/totebag.svg"
            />
            <Img
              className="mr-[99px] mt-[33px] 
                          lg:scale-150 lg:ml-[10px] lg:mt-[70px]
                            "
              width={50}
              height={70}
              src="/Group 837.svg"
            />
          </div>
          <div
            className=" border-2 rounded-[5.3px] 
                  h-[49px] text-center mt-[16px] border-c-02 brigthness-50 shadow shadow-c-01"
          >
            <p className="font-bold text-xl mt-[7px]">40K</p>
          </div>
        </div>
        <div>
          <div className=" border-2 rounded-[5.3px] w-[151px] h-[151px] border-c-02 brigthness-50 lg:w-[200px] lg:h-[200px] shadow shadow-c-01">
            <p className="font-bold text-[16.26px] font-Jost ml-[2px]">Gantungan Kunci</p>
            <Img
              className="ml-[99px] mt-[-24px]
                     lg:scale-150 lg:ml-[132px] lg:mt-[1.5px]"
              width={50}
              height={70}
              src="/Group 838.svg"
            />
            <Img
              className="ml-[33px] mt-[-20px] absolute
                           lg:scale-150 lg:ml-[50px]"
              width={71}
              height={70}
              src="/key.svg"
            />
            <Img
              className="mr-[100px] mt-[30px] 
                          lg:scale-150 lg:ml-[5px] lg:mt-[40px]"
              width={56}
              height={75}
              src="/Group 837.svg"
            />
          </div>
          <div
            className=" border-2 rounded-[5.3px] 
                  h-[49px] text-center mt-[16px] border-c-02 brigthness-50 shadow shadow-c-01"
          >
            <p className="font-bold text-xl mt-[7px]">15K</p>
          </div>
        </div>
      </div>
      <div
        className="bg-clip-text text-transparent bg-gradient-to-r from-c-01 to-c-02 
          font-medium text-xs  font-jost 
          mt-[37px] space-y-[12px] sm:mr-[650px] sm:mt-[84px]
          sm:w-[400px] sm:ml-[300px] lg:ml-[50px]"
      >
        <p>*Setiap pembelian item akan mendapatkan sticker gratis</p>
        <p>*Barang yang sudah dibeli tidak bisa dikembalikan</p>
      </div>
      <div className="mt-[79px] sm:ml-[550px] sm:mt-[-30px] lg:mr-[-100px]">
        <Button type="tertiary">Beli Sekarang</Button>
      </div>
    </div>
  )
}
