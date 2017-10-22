import Page from "../layouts/main";

export default () => (
  <Page>
    <div className="cont">
      <h1>Month Overview</h1>
      {/* Shows scheduled task and events of month */}
      <p>Please choose a link</p>
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
