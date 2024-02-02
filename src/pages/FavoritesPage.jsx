import { CarItem } from 'components/CarItem/CarItem';
import pagesCss from '../pages/Pages.module.css';
const Favorite = () => {
  return (
    <section className={pagesCss.section}>
      <div className={pagesCss.container} style={{ '--top': '50px' }}>
        <ul>
          <CarItem />
        </ul>
      </div>
    </section>
  );
};

export default Favorite;
