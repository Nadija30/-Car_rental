import pagesCss from '../pages/Pages.module.css';
import auto from '../assets/hero_car.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section
      className={pagesCss.section}
      style={{ '--url': auto && `url(${auto})` }}
    >
      <div className={pagesCss.container} style={{ '--bottom': '0px' }}>
        <div className={pagesCss.welcomeWrapper}>
          <div className={pagesCss.welcome}>
            <p>Welcome to Car Rental!</p>
            <p>
              Choose and book the best cars <Link to="/catalog">HERE</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
