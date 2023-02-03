import Image from 'next/image'

export function CompetitionList() {
  return (
    <div className="flex md:flex-row mt-12 justify-around flex-col">
      <div className="svg-wrapper relative flex justify-center">
        <svg height="224" width="200" strokeLinecap="round">
          <rect
            className="competition-shape fill-bg-04"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape2 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape3 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
        </svg>
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/vector/dashboard/peserta/paper.png" width={150} height={150} />
          <div className=" text-white mt-3 text-base font-poppins font-semibold flex justify-center text-center">
            Paper Competition
          </div>
        </div>
      </div>

      <div className="svg-wrapper relative flex justify-center">
        <svg height="224" width="200" strokeLinecap="round">
          <rect
            className="competition-shape fill-bg-04"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape2 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape3 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
        </svg>
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/vector/dashboard/peserta/video.png" width={150} height={150} />
          <div className=" text-white text-base font-poppins font-semibold flex justify-center text-center mt-3">
            Video Competition
          </div>
        </div>
      </div>
      <div className="svg-wrapper relative flex justify-center">
        <svg height="224" width="200" strokeLinecap="round">
          <rect
            className="competition-shape fill-bg-04"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape2 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape3 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
        </svg>
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/vector/dashboard/peserta/poster.png" width={150} height={150} />
          <div className=" text-white text-base font-poppins font-semibold flex justify-center text-center mt-3">
            Poster Competition
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionList
