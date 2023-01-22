export function Faq() {
  const FaqEdit = [
    {
      Question: 'Alur cara daftar lombanya bagaimana?',
      Answer: 'Peserta bisa memahami alur pendaftaran lomba pada guidebook berikut:   ',
      A: ' -Paper Competition  : ',
      B: ' -Poster Competition : ',
      C: ' -Video Competition  :',
      D: '',
      key: '1',
    },
    {
      Question: 'Apakah ada sertifnya?',
      Answer: ' Peserta lomba dan pemenang lomba akan memperoleh sertifikat.',
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
      A: '-Paper Competition : Rp.....',
      B: '-Poster Competition: Rp.....',
      C: '-Video Competition : Rp.....',
      D: 'Untuk informasi yang lebih detail silahkan mengakses guidebook perlombaan.',
      key: '7',
    },
  ]
  return (
    <div className="justify-start bg-gradient-to-br from-c-00 to-bg-01 h-[300vh]  flex items-center flex-col">
      <div>
        <div
          className="
          flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-t from-c-02 to-c-01 text-7xl font-extrabold uppercase text-white font-jost absolut 
          mt-[300px] md:mt-[370px] lg:mt-[190px]"
        >
          FAQ
        </div>
        <div className="uppercase text-white text-lg font-semibold font-poppins ">
          frequently asked question
        </div>
      </div>
      <ul className="space-y-4 absolute mt-[430px] brightness-75 mx-[7px] md:mt-[500px] lg:mt-[315px]">
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
                className="font-poppins  text-[12px] sm:text-[13.38px] leading-[18px] font-normal flex items-center py-[5px] pl-[10px] lg:py-[18px] lg:pl-[30
                    px] lg:text-[16px] lg:h-12  md:h-10 h-8"
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
              <div className=" overflow-y-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div className="pt-[3px] font-poppins text-[11px] sm:text-[14px] leading-[18px] lg:text-[15px] lg:leading-[18px] font-normal text-justify px-[10px] lg:pt-[30px] lg:pl-[30px] lg:pr-[60px] h-[200px] lg:pt-[10px]">
                  <p>{route.Answer}</p>
                  <div className="font-poppins text-[11px] sm:text-[14px] leading-[18px] lg:text-[15px] lg:leading-[18px] font-normal text-justify pl-[10px] pt-[5px] flex flex-col space-y-1 lg:pt-[7px] lg:space-y-2">
                    <p>{route.A}</p>
                    <p>{route.B}</p>
                    <p>{route.C}</p>
                  </div>
                  <p className=" font-poppins text-[11px] sm:text-[14px] leading-[18px] lg:text-[15px] lg:leading-[20px] font-normal text-justify pt-[4px] lg:pt-[7px]">
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
