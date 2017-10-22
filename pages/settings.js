import Page from "../layouts/main";
import AdjustTime from "../components/AdjustTime";
export default () => (
  <Page>
    <div className="cont">
      <h1>Settings</h1>
      <AdjustTime />
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
