import Link from "next/link";

const Header = props =>
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
    <style jsx>{`
      .headerCont {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      ul {
        list-style: none;
        cursor: pointer;
        display: flex;
        flex-direction: row;
      }
      li {
        margin: 5px;
        padding: 2px;
      }
    `}</style>
  </header>;
export default Header;
