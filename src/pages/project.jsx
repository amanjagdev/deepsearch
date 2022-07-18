import { Fade } from 'react-awesome-reveal';
import ProjectArea from '../components/areas/ProjectArea';

export default function Quiz() {
  return (
    <div className="Home">
      <Fade triggerOnce></Fade>
      <Fade triggerOnce>
        <ProjectArea />
      </Fade>
      <Fade triggerOnce></Fade>
    </div>
  );
}
