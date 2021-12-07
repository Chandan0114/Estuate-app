import { Checkbox, DataTableSkeleton } from 'carbon-components-react';
import React from 'react';
// import Practise from './Practise';
import '../CSS/Skeleton.scss';
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink
} from 'carbon-components-react/lib/components/UIShell';

const Fade16 = () => <Checkbox labelText="" id="checked-2" />;

function Skeleton() {
  return (
    <div>
      <DataTableSkeleton columnCount={8} rowCount={6} />

      <SideNav aria-label="Side navigation" className="bx--side-nav1">
        <SideNavItems className="bx--side-nav__items">
          <SideNavMenu renderIcon={Fade16} title="Add New">
            <SideNavMenuItem>Weekly</SideNavMenuItem>

            <SideNavMenuItem>Daily</SideNavMenuItem>
          </SideNavMenu>

          <SideNavLink renderIcon={Fade16}>Report</SideNavLink>
          <SideNavLink renderIcon={Fade16}>Review</SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
  );
}
export default Skeleton;
