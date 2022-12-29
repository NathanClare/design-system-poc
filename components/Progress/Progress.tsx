import React from 'react';
import classNames from 'classnames'
import * as Progress from '@radix-ui/react-progress';


interface ProgressProps {
    variant?: 'filled' | 'grey'
  }
  
  const ProgressClasses: Record<string, Record<string, string>> = {
  variant: {
      'filled': 'bg-primary-50',
      'grey': 'bg-neutral-50'
  }
  }

const ProgressComp = ({variant = 'filled' }: ProgressProps) => {
    const [progress, setProgress] = React.useState(13);
    const classes = classNames(ProgressClasses['variant'][variant], 'w-full h-full transition duration-1000')

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(78), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className="relative overflow-hidden bg-neutral-80 rounded-full w-80 h-6" value={78}>
      <Progress.Indicator
        className={classes}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressComp;