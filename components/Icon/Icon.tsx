import React from 'react';
import classNames from 'classnames'
import * as Avatar from '@radix-ui/react-avatar';


interface IconProps {
    size?: 'lg' | 'md' | 'sm'
    variant?: 'filled' | 'grey'
  }
  
  const iconClasses: Record<string, Record<string, string>> = {
      size: {
          'sm': 'w-8 h-8',
          'md': 'w-11 h-11',
          'lg': 'w-14 h-14',
      },
      variant: {
        'filled': 'bg-primary-90 text-primary-40',
        'grey': 'bg-neutral-90 text-neutral-40'
    }
  }
  
const Icon = ({ size = 'md', variant = 'filled' }: IconProps) => {
    const classesBase = classNames('flex gap-2.5')
    const classesVariant = classNames('flex items-center justify-center align-middle overflow-hidden select-none rounded-full bg-primary-10', iconClasses['size'][size])
    const classesFallback = classNames('w-full h-full flex items-center justify-center  text-base font-medium', iconClasses['variant'][variant])
  
    return (
        <div className={classesBase}>
            <Avatar.Root className={classesVariant}>
                <Avatar.Image
                    className="w-full h-full object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
                />
                <Avatar.Fallback className={classesFallback} delayMs={600}>
                    CT
                </Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className={classesVariant}>
                <Avatar.Image
                    className="w-full h-full object-cover rounded-full"
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    alt="Pedro Duarte"
                />
                <Avatar.Fallback className={classesFallback} delayMs={600}>
                    JD
                </Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root className={classesVariant}>
                <Avatar.Fallback className={classesFallback}>PD</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}

export default Icon;