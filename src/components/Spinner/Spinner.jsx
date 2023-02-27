import { ColorRing } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <ColorRing
      visible={true}
      height="25"
      width="25"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#b9111c', '#b9111c', '#b9111c', '#b9111c', '#b9111c']}
    />
  );
}
