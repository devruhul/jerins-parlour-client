import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  let { admin } = useAuth();

  return (
    <div>
      <SideNav className='bg-transparent mt-10'>
        <SideNav.Toggle />
        <SideNav.Nav>
          <Link to='/'>
            <NavItem>
              <NavIcon>
                <i
                  className='fa fa-fw fa-home'
                  style={{
                    fontSize: "1.75em",
                    color: "black",
                    paddingBottom: ".5em",
                  }}
                />
              </NavIcon>
              <NavText style={{ paddingBottom: ".7em", color: "white" }}>
                Home
              </NavText>
            </NavItem>
          </Link>
          {admin && (
            <Link to='/dashboard/addService'>
              <NavItem>
                <NavIcon>
                  <i
                    className='fa-solid fa-plus'
                    style={{
                      fontSize: "1.75em",
                      color: "black",
                      paddingBottom: ".2em",
                    }}
                  />
                </NavIcon>
                <NavText style={{ paddingBottom: ".7em", color: "white" }}>
                  Add Service
                </NavText>
              </NavItem>
            </Link>
          )}
          {admin && (
            <Link to='/dashboard/makeAdmin'>
              <NavItem>
                <NavIcon>
                  <i
                    className='fa-solid fa-user-plus'
                    style={{
                      fontSize: "1.75em",
                      color: "black",
                      paddingBottom: ".2em",
                    }}
                  />
                </NavIcon>
                <NavText style={{ paddingBottom: ".7em", color: "white" }}>
                  Make Admin
                </NavText>
              </NavItem>
            </Link>
          )}
          {admin && (
            <Link to='/dashboard/manageServices'>
              <NavItem>
                <NavIcon>
                  <i
                    className='fa-solid fa-list-check'
                    style={{
                      fontSize: "1.75em",
                      color: "black",
                      paddingBottom: ".2em",
                    }}
                  />
                </NavIcon>
                <NavText style={{ paddingBottom: "1em", color: "white" }}>
                  Manage Services
                </NavText>
              </NavItem>
            </Link>
          )}
          <Link to='/dashboard/bookingList'>
            <NavItem>
              <NavIcon>
                <i
                  className='fa-solid fa-list'
                  style={{
                    fontSize: "1.75em",
                    color: "black",
                    paddingBottom: ".2em",
                  }}
                />
              </NavIcon>
              <NavText style={{ paddingBottom: "1em", color: "white" }}>
                Bookings
              </NavText>
            </NavItem>
          </Link>
          {admin && (
            <Link to='/dashboard/ordersList'>
              <NavItem>
                <NavIcon>
                  <i
                    className='fa-solid fa-list-ol'
                    style={{
                      fontSize: "1.75em",
                      color: "black",
                      paddingBottom: ".2em",
                    }}
                  />
                </NavIcon>
                <NavText style={{ paddingBottom: "1em", color: "white" }}>
                  Orders
                </NavText>
              </NavItem>
            </Link>
          )}
          {!admin && (
            <Link to='/dashboard/serviceReview'>
              <NavItem>
                <NavIcon>
                  <i
                    className='fa-regular fa-message'
                    style={{
                      fontSize: "1.75em",
                      color: "black",
                      paddingBottom: ".2em",
                    }}
                  />
                </NavIcon>
                <NavText style={{ paddingBottom: ".5em", color: "white" }}>
                  Review
                </NavText>
              </NavItem>
            </Link>
          )}
        </SideNav.Nav>
      </SideNav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
