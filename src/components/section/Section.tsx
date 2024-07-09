import { HTMLAttributes, PropsWithChildren } from 'react';

const Section: React.FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren> = (
  props
) => {
  const className = props.className ? `section ${props.className}` : `section`;
  return (
    <section {...props} className={className}>
      <div className='section__inner'>{props.children}</div>
    </section>
  );
};

export default Section;
