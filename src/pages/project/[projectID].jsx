import { Fade } from 'react-awesome-reveal';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProjectArea } from '../../components/areas';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      projectID: params.projectID,
    },
  };
};

export default function Quiz({ projectID }) {
  return (
    <div className="Home">
      <Fade triggerOnce>
        <Header />
      </Fade>
      <Fade triggerOnce>
        <ProjectArea projectID={projectID} />
      </Fade>
      <Fade triggerOnce>
        <Footer />
      </Fade>
    </div>
  );
}
