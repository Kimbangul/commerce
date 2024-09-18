import { PropsWithChildren } from 'react';
import {gsap, useGSAP} from 'components/provider/gsap';

const GSAPProvider : React.FC<PropsWithChildren> = (props) => {
gsap.registerPlugin(useGSAP);

  return (
    <>{props.children}</>
  )
}

export default GSAPProvider;