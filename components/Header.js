import React from "react";
import { Icon } from "semantic-ui-react";
import Link from "next/link";

const Header = props => (
  <header className="headerCont">
    <div>
      <ul>
        <li>
          <Link href="/">
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <h3>Todos</h3>
          </Link>
        </li>
        <li>
          <Link href="/goals">
            <h3>Goals</h3>
          </Link>
        </li>
      </ul>
    </div>
    <div className="iconCont">
      <Link href="/settings">
        <Icon name="setting" size="large" />
      </Link>
    </div>
    <style jsx>{`
      .headerCont {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      ul {
        padding: 0;
        list-style: none;
        cursor: pointer;
        display: flex;
        flex-direction: row;
      }
      li {
        margin: 5px;
        padding: 2px;
      }
      .iconCont {
        position: relative;
        right: -22%;
        top: -35px;
        align-self: flex-end;
      }
    `}</style>
  </header>
);
export default Header;
