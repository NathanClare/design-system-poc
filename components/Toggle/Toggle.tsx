import React from 'react';
import classNames from 'classnames';
import * as Toggle from '@radix-ui/react-toggle';
import { FontItalicIcon } from '@radix-ui/react-icons';

interface ToggleProps {
    size?: 'md' | 'lg'
  }
  
  const toggleClasses: Record<string, Record<string, string>> = {

      size: {
          'md': 'pl-2.5 h-9 w-9',
          'lg': 'pl-4 h-12 w-12'
      }
  }
  
      const ToggleComp = ({ size = 'md' }: ToggleProps) => {
    
          const classesVariant = classNames('bg-primary-100 text-primary-base pl-2.5 h-9 w-9 rounded flex items-center text-base shadow hover:bg-primary-80 data-[state=on]:bg-primary-90 data-[state=on]:text-primary-60 focus:shadow-xl', toggleClasses['size'][size])
            
          return (
              <Toggle.Root className={classesVariant} aria-label="Toggle italic">
              <FontItalicIcon />
          </Toggle.Root>
          );
            
      }

export default ToggleComp;
