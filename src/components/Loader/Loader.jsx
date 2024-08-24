
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Oval
        height={40}
        width={40}
        color="blue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="blue"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
