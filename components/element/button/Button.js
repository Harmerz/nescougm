export const Button = ({ children, type, size, animation, onClick }) => {
  const buttonType = {
    primary: 'rounded-full bg-c-01 text-c-00 hover:opacity-80 ',
    secondary: 'rounded-full text-c-01 border-2 border-c-01 hover:bg-c-01 hover:text-c-00',
    tertiary: 'rounded-[8.07px] text-white bg-gradient-to-b from-c-01/[.67] to-[#41B8A9]/[.91]',
  }

  const buttonSize = {
    sm: 'text-sm px-7 py-2',
    md: 'text-base px-8 py-2',
    lg: 'text-base px-12 py-3 ',
    xl: 'text-base w-[362px] h-[51px]',
  }
  const buttonAnimation = {
    main: 'drop-shadow-[0_0_14px_rgba(109,199,236,0.491667)] hover:drop-shadow-[0_0_20px_rgba(81,177,204,0.64)]',
    extra: 'hover:scale-105 active:scale-100 active:opacity-50 disabled:opacity-50',
  }

  const colorClassName = buttonType[type || 'primary']
  const sizeClassName = buttonSize[size || 'md']
  const animationClassName = buttonAnimation[animation || 'main']

  return (
    <button
      type="submit"
      className={` ${colorClassName} ${sizeClassName} ${animationClassName} transition-all font-bold `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
