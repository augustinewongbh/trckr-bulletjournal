import Page from "../layouts/main";

export default () => (
  <Page>
    <div className="cont">
      <h1>Trckr</h1>

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
