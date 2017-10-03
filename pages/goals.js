import Page from "../layouts/main";
import AddProject from "../components/containers/AddProject";
import ProjectsList from "../components/containers/ProjectsList";
export default () =>
  <Page>
    <div className="cont">
      <ProjectsList />
      <AddProject />
      <style jsx>{`
        .cont {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  </Page>;
