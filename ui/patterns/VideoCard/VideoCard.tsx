import React from 'react'

import VideoButton from '@/ui/components/Buttons/VideoButton/VideoButton'

interface VideoplayerProps {
  src: string
  size?: 'sm' | 'md' | 'lg'
  loop?: boolean
  controls?: boolean
  autoplay?: boolean
}

interface IVideoplayerClasses {
  size: Record<string, string>
}

const videoplayerClasses: IVideoplayerClasses = {
  size: {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[500px] h-[500px]',
    lg: 'max-w-full max-h-full'
  }
}

const VideoCard = ({ src, size = 'md', loop = false, controls = false, autoplay = true }: VideoplayerProps) => {
  return (
    <div className={`inline-flex items-center justify-center ${videoplayerClasses.size[size]}`}>
      <div>
        <VideoButton time={'something'} title={'title'} />

        <video className="h-full w-full" loop={loop} controls={controls} autoPlay={autoplay}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag. <a href={src}>Click here to download the video instead.</a>
        </video>
      </div>
    </div>
  )
}

export default VideoCard
