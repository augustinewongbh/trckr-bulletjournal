import Page from "../layouts/main";

export default () => (
  <Page>
    <div className="cont">
      <h1>Notes</h1>
      {/* Shows all notes sorted by latest date entry */}
      <ul>
        <li>list of note</li>
      </ul>
      <style jsx>{`
        .cont {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        h1 {
          color: purple;
        }
      `}</style>
    </div>
  </Page>
);
