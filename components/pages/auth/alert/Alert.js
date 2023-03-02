import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function Alert({ text, type, animation }) {
  const AlertType = {
    primary: 'border-white border-[1px]',
    secondary: 'border-[#BF4646] border-[2px]',
  }
  const AlertAnimation = {
    spin: 'animate-spin',
    none: 'hidden',
  }
  const typeClassName = AlertType[type || 'primary']
  const animationClassName = AlertAnimation[animation || 'none']
  return (
    <div className="flex justify-center items-start pt-[22px] drop-shadow-[0px_0px_1.9px_#008DB8]">
      <div
        className={`${typeClassName} flex justify-center items-center gap-[5px]   h-[29px] w-[203px] rounded-[8px] bg-[#2B3A46] `}
      >
        <AiOutlineLoading3Quarters size={10} className={`${animationClassName}`} />
        <div className="text-white font-poppins font-normal text-[11px]">{text}</div>
      </div>
    </div>
  )
}
export default Alert
