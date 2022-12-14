import { useEffect } from 'react';
import { useState } from 'react';

type IconProps = {
  variant: string;
};

export const Icon: React.FC<IconProps> = ({ variant }) => {
  const [iconSrc, setIconSrc] = useState();

  useEffect(() => {
    const mount = async () => {
      const result = await import(`../../../public/${variant}.svg`);
      if (result) {
        setIconSrc(result.default);
      }
    };

    mount();
  }, [variant]);

  return <img src={iconSrc} width="22px" height="22px" alt={variant} />;
};
