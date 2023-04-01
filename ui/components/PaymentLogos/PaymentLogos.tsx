/* eslint-disable react/no-array-index-key */
import LogoRedIcon from '../../../assets/svgs/logo-red.svg'

const partnerLogos = [LogoRedIcon, LogoRedIcon, LogoRedIcon, LogoRedIcon, LogoRedIcon, LogoRedIcon, LogoRedIcon]

const PaymentPartners = () => {
  return (
    <div className="block py-lg text-center [&>*+*]:ml-sm">
      {partnerLogos.map((Logo, index) => (
        <div key={index} className="inline-block h-[30px] w-[60px] bg-surface-100 [&_svg]:h-[30px]"></div>
      ))}
    </div>
  )
}

export default PaymentPartners
