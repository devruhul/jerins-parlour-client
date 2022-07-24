import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link, Outlet } from 'react-router-dom';
import DashboardHome from './DashboardHome/DashboardHome';

const Dashboard = () => {

  return (
    <div>
      <SideNav
        className="bg-transparent"
      >
        <SideNav.Toggle />
        <SideNav.Nav >
          <Link to="/">
            <NavItem>
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: 'black', paddingBottom: '.5em' }} />
              </NavIcon>
              <NavText style={{ paddingBottom: '.7em', color: 'white' }}>
                Home
              </NavText>
            </NavItem>
          </Link>
          <Link to="/dashboard/addService">
            <NavItem>
              <NavIcon>
                <i class="fa-solid fa-plus" style={{ fontSize: '1.75em', color: 'black', paddingBottom: '.2em' }} />
              </NavIcon>
              <NavText style={{ paddingBottom: '.7em', color: 'white' }}>
                Add Service
              </NavText>
            </NavItem>
          </Link>
          <Link to="/dashboard/makeAdmin">
            <NavItem>
              <NavIcon>
                <i class="fa-solid fa-user-plus" style={{ fontSize: '1.75em', color: 'black', paddingBottom: '.2em' }} />
              </NavIcon>
              <NavText style={{ paddingBottom: '.7em', color: 'white' }}>
                Make Admin
              </NavText>
            </NavItem>
          </Link>

          <Link to="/dashboard/bookingList">
            <NavItem>
              <NavIcon>
                <i class="fa-solid fa-list" style={{ fontSize: '1.75em', color: 'black', paddingBottom: '.2em' }} />
              </NavIcon>
              <NavText style={{ paddingBottom: '1em', color: 'white' }}>
                Bookings
              </NavText>
            </NavItem>
          </Link>
          <Link to="/dashboard/orderList">
            <NavItem>
              <NavIcon>
                <i class="fa-solid fa-list" style={{ fontSize: '1.75em', color: 'black', paddingBottom: '.2em' }} />
              </NavIcon>
              <NavText style={{ paddingBottom: '1em', color: 'white' }}>
                Orders
              </NavText>
            </NavItem>
          </Link>
          <Link to="/dashboard/serviceReview">
            <NavItem>
              <NavIcon>
                <i class="fa-regular fa-message" style={{ fontSize: '1.75em', color: 'black', paddingBottom: '.2em' }} />
              </NavIcon>
              <NavText style={{ paddingBottom: '.5em', color: 'white' }}>
                Review
              </NavText>
            </NavItem>
          </Link>
        </SideNav.Nav>
      </SideNav >
      <DashboardHome />
      <Outlet />
    </div>
  );
}

export default Dashboard;