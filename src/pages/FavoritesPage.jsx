import Sidebar from 'components/Sidebar/Sidebar';
import pagesCss from '../pages/Pages.module.css';
const FavoritePage = () => {
  return (
    <section className={pagesCss.section}>
      <div className={pagesCss.container} style={{ '--top': '50px' }}>
        <Sidebar />
      </div>
    </section>
  );
};

export default FavoritePage;
