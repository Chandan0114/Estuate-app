import { Button } from 'carbon-components-react';

type define = {
  title: string;
  icon: any;
};
const Button1 = (props: define) => {
  return (
    <div>
      <Button
        style={{
          marginTop: '30px',
          margin: '10px',
          borderRadius: '10px',
          fontSize: '17px',
          padding: '22px 40px 22px 30px',
          backgroundColor: 'rgb(113 145 179)',
          textDecoration: 'none !important '
        }}>
        {props.icon} {props.title}
      </Button>
    </div>
  );
};

export default Button1;
