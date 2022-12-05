import style from '../styles/Home.module.css';

type SectionListMainPropType = {
  title: string;
  styling: string;
};

const SectionList = (props: SectionListMainPropType) => {
  return (
    <div className={props.styling}>
      <h2 className={style.sectionTitle}>{props.title}</h2>
      <i className={`${style.sectionListIcon} uil uil-arrow-right`}></i>
    </div>
  );
};

export default SectionList;
