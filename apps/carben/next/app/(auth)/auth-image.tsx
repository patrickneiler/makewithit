import Image from 'next/image'
import AuthBg from '@carben/public/images/auth-image.jpg'
import AuthDecoration from '@carben/public/images/auth-decoration.png'
// import { ReactAnimatedIcon } from '@the/feature/react/icons'
// import { getAnimationData } from '@the/feature/react/animations'

export default function AuthImage() {
  return (
    <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
      <div className="object-cover object-center w-full h-full" >
        {/* <ReactAnimatedIcon options={{ animationData: getAnimationData('foreman') }} /> */}
      </div>
      <Image className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src={AuthDecoration} priority width={218} height={224} alt="Authentication decoration" />
    </div>
  )
}
