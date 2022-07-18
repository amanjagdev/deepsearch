import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/auth-context';
import Heading from '../Heading';

import Tabs from '../project/Tabs';
import ConnectServices from '../project/ConnectServices';
import RedefineData from '../project/RedefineData';
import DefineConstraints from '../project/DefineConstraints';
import OverviewAndAPI from '../project/OverviewAndAPI';

import Axios from 'axios';

const ProjectArea = () => {
  const router = useRouter();

  const [project, setProject] = useState(null);
  const [tab, setTab] = useState(0);

  const [tabOneState, setTabOneState] = useState(null);
  const [tabTwoState, setTabTwoState] = useState(null);
  const [tabThreeState, setTabThreeState] = useState(null);

  return (
    <div className="ProjectArea">
      <div className="container">
        <Heading text={project ? project.name : 'Project'} />
      </div>
      <div className="container area">
        <Tabs tab={tab} setTab={setTab} />
        {tab === 0 && (
          <ConnectServices
            nextTab={() => setTab(1)}
            setTabState={setTabOneState}
            tabStates={{ tabOneState, tabTwoState, tabThreeState }}
          />
        )}
        {tab === 1 && (
          <RedefineData
            nextTab={() => setTab(2)}
            setTabState={setTabTwoState}
            tabStates={{ tabOneState, tabTwoState, tabThreeState }}
          />
        )}
        {tab === 2 && (
          <DefineConstraints
            nextTab={() => setTab(3)}
            setTabState={setTabThreeState}
            tabStates={{ tabOneState, tabTwoState, tabThreeState }}
          />
        )}
        {tab === 3 && <OverviewAndAPI />}
      </div>
    </div>
  );
};

export default ProjectArea;
