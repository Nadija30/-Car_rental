import Sidebar from 'components/Sidebar/Sidebar';
import pagesCss from '../pages/Pages.module.css';
const FavoritePage = () => {
  return (
    <section className={pagesCss.section}>
      <div className={pagesCss.container} style={{ '--top': '50px' }}>
        <div className="mt-[-3rem] w-full wide:mt-[-8rem]">
          <div className="relative mx-auto my-0 w-full ">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritePage;
