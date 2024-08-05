import { Section, Title } from 'components/section';

const eventList = [
  { img: '/images/event/event01.jpg', title: 'DIGITAL LIFE T GIFT ZONE' },
  { img: '/images/event/event02.jpg', title: 'Galaxy Z Filp6 WALLPAPER' },
  { img: '/images/event/event03.jpg', title: 'THE BEST GIFT FOR COY CATS' },
  { img: '/images/event/event04.jpg', title: 'SALE FESTA' },
  { img: '/images/event/event05.jpg', title: 'BELKIN ACC BIG SALE' },
];

const Event = () => {
  return (
    <Section className='event'>
      {eventList.map((el, idx) => (
        <div className='event__banner' key={`event-${idx}`}>
          <a href='#'>
            <p className='event__banner-title'>{el.title}</p>
            <img className='event__banner-bg' src={el.img} alt='' />
          </a>
        </div>
      ))}
      <div className='event__banner'>
        <Title text='Event' desc='티다문구점 이벤트' />
      </div>
    </Section>
  );
};

export default Event;
