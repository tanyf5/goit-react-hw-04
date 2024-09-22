import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <ThreeCircles
      visible={true}
      height="20"
      width="20"
      color="#4fa94d"
      innerCircleColor="rgb(55, 14, 93)"
      middleCircleColor="red"
      ariaLabel="three-circles-loading"
      wrapperClass={css.loader}
    />
  );
}