/* eslint-disable */
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Button1 from './Button1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

const Styledheader = styled.h4`
  margin-top: 30px;
  fontsize: 20px;
  margin-left: 10px;
`;

const Styledpara = styled.p`
  lineheight: 28px;
  color: grey;
  margin-left: 10px;
  line-height: 1.8;
`;
const Tracksheet = () => {
  const content = (
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--offset-lg-3 bx--col-lg-13">
          <Styledheader>TimeSheet Managment System</Styledheader> <br />
          <Styledpara>
            TimeSheet managment system keep a track of hours you have spent on a particular project
            and helps generate reports for billing to the client
          </Styledpara>
          <br></br>
          <br></br>
          <br></br>
          <div style={{ display: 'flex' }}>
            <Link to="/dummy">
              <Button1
                icon={
                  <FontAwesomeIcon
                    style={{ margin: '8px', marginRight: '23px' }}
                    icon={faPlusCircle}
                    size="2x"
                  />
                }
                title="ADD NEW"></Button1>
            </Link>
            <Button1
              icon={
                <FontAwesomeIcon
                  style={{ margin: '8px', marginRight: '23px' }}
                  icon={faChartBar}
                  size="2x"
                />
              }
              title="REPORTS"
            />
            <Button1
              icon={
                <FontAwesomeIcon
                  style={{ margin: '8px', marginRight: '23px' }}
                  icon={faFileAlt}
                  size="2x"
                />
              }
              title="REVIEW"
            />
          </div>
        </section>
      </div>
    </div>
  );

  return <Content id="main-content">{content}</Content>;
};

export default Tracksheet;
