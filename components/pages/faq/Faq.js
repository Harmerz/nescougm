export function Faq() {
  const FaqEdit = [
    // {
    //   Question: 'Alur cara daftar lombanya bagaimana?',
    //   Answer: 'Peserta bisa memahami alur pendaftaran lomba pada guidebook berikut:   ',
    //   A: ' -Paper Competition  :',
    //   B: ' -Poster Competition : ',
    //   C: ' -Video Competition  :',
    //   D: '',
    //   key: '1',
    // },
    {
      Question: 'Apakah ada sertifnya?',
      Answer: ' Peserta lomba dan pemenang lomba akan memperoleh sertifikat. ',
      A: '',
      B: '',
      C: '',
      D: '',
      key: '2',
    },
    {
      Question: 'Pembagian sertif dishare lewat mana?',
      Answer:
        'Sertifikat akan diserahkan kepada peserta dan pemenang melalui alamat email milik perwakilan tim.',
      A: '',
      B: '',
      C: '',
      D: '',
      key: '3',
    },
    {
      Question: 'Apakah ada link grup WA untuk peserta?',
      Answer:
        ' Akan ada grup yang terdiri dari peserta untuk informasi seputar webinar. Sedangkan untuk media sosial yang akan digunakan, mohon ditunggu informasinya lebih lanjut.',
      A: '',
      B: '',
      C: '',
      D: '',
      key: '4',
    },
    {
      Question: ' Webinar apakah akan online/offline?',
      Answer: ' Webinar akan dilaksanakan secara offline.',
      A: '',
      B: '',
      C: '',
      key: '5',
    },
    {
      Question: 'Apakah lomba Nesco terbuka untuk umum?',
      Answer: 'Nesco Competition dibagi menjadi 3 lomba, yaitu :',
      A: '-Paper    Competition [Kategori Mahasiswa] ',
      B: '-Poster  Competition [Kategori pelajar SMA]',
      C: '-Video Competition[Kategori Mahasiswa & pelajar SMA]',
      D: '',
      key: '6',
    },
    {
      Question: 'Apakah pendaftaranya free?',
      Answer: ' Nesco Competition dikenai biaya untuk masing-masing competition:',
      A: '-Paper Competition : Rp130.000,00.',
      B: '-Poster Competition: Rp40.000,00',
      C: '-Video Competition : Rp60.000,00',
      D: 'Untuk informasi yang lebih detail silahkan mengakses guidebook perlombaan.',
      key: '7',
    },
  ]
  return (
    <div className=" justify-start  flex items-center flex-col bg-c-00 border-black ">
      <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] absolute top-20 left-0 lg:top-1/4 lg:left-10">
          <div className="h-full w-full bg-gradient-to-b from-c-01 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
      </div>
      <div className="h-[200px] w-[200px] sm:h-[481px] sm:w-[481px] absolute top-1/2 right-0 lg:top-1/2 lg:right-10">
          <div className="h-full w-full bg-gradient-to-b from-c-01 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
      </div>
      <div
        className=" 
        bg-clip-text text-transparent bg-gradient-to-t from-c-02 to-c-01 text-6xl sm:text-7xl font-extrabold uppercase text-white font-jost  
        mt-[100px] md:mt-[150px] lg:mt-[196px]"
      >
        FAQ
      </div>
      <div className="uppercase text-white text-lg font-semibold font-poppins mt-[13px]  ">
        frequently asked question
      </div>
      <ul className="space-y-4 mx-6 md:mx-[40px] mt-[50px] brightness-75 md:mt-[60px] lg:mt-[83px] mb-[100px] ">
        {FaqEdit.map((route) => {
          return (
            <div
              className="relative  lg:w-[752px] overflow-hidden bg-transparent text-white border-black  rounded-[10px] shadow-[2px_2px_8px] shadow-c-02 absolute "
              key={route.key}
            >
              <input
                type="checkbox"
                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div
                className="font-poppins  text-[11px] sm:text-[13.38px] leading-[18px] font-normal flex items-center py-[5px] pl-[10px] lg:py-[18px] lg:pl-[30px] 
                lg:text-[16px] lg:h-12  md:h-10 h-8 w-[285px] sm:w-auto"
              >
                <h1>{route.Question}</h1>
              </div>
              <div
                className="absolute py-[5px] top-0.5 right-1 scale-75 text-c-01
                md:top-1.5 md:right-2 md:scale-100 pt-[1.5px] lg:top-3  lg:pt-0 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
              <div
                className="absolute top-1 right-1  text-c-02 scale-75
                md:top-2 md:right-2 md:scale-100 lg:top-3  transition-transform duration-500 rotate-90 peer-checked:rotate-180 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </div>
              <div className=" overflow-y-hidden transition-all duration-500 max-h-0 peer-checked:max-h-48">
                <div className="pt-[3px] font-poppins text-[11px] sm:text-[14px] leading-[18px] lg:text-[15px] lg:leading-[18px] font-normal text-justify px-[10px] lg:pt-[30px] lg:pl-[30px] lg:pr-[60px ] lg:pt-[10px]">
                  <p>{route.Answer}</p>
                  <div className="font-poppins text-[11px] sm:text-[14px] leading-[18px] lg:text-[15px] lg:leading-[18px] font-normal text-justify pl-[10px] pt-[5px] flex flex-col space-y-1 lg:pt-[7px] lg:space-y-2 ">
                    <p>{route.A}</p>
                    <p>{route.B}</p>
                    <p>{route.C}</p>
                  </div>
                  <p className=" font-poppins text-[11px] sm:text-[14px] leading-[18px] lg:text-[15px] lg:leading-[20px] font-normal text-justify pt-[4px] lg:pt-[7px] pb-[30px]">
                    {route.D}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
