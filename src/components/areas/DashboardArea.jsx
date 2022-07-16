import { useEffect, useState } from 'react';

import Heading from '../Heading';
import { useUser } from '../../context/auth-context';
import Image from 'next/image';
import SVG_arrow from '../../assets/arrow.svg';
import { useRouter } from 'next/router';
import { HiPlus } from 'react-icons/hi';
import mongoWhite from '../../assets/icons/mongo-white.svg';

import Axios from 'axios';

const DashboardArea = () => {
  const [projects, setProjects] = useState(null);
  const router = useRouter();
  const { user, isAuth, token } = useUser();

  // useEffect(() => {
  // 	if (token) {
  // 		// Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/all`, {
  // 		// 	headers: {
  // 		// 		Authorization: "Bearer " + token,
  // 		// 	},
  // 		// })
  // 		// 	.then((res) => res.data.data)
  // 		// 	.then((res) => {
  // 		// 		setProjects(res);
  // 		// 	});
  // 	}
  // 	setProjects([
  // 		{
  // 			_id: 1,
  // 			name: "Youtube Music",
  // 			connected: ["mongoDB"],
  // 			description: "Artist search for youtube music",
  // 		},
  // 	]);
  // }, [token]);

  // if (!isAuth) return null;
  return (
    <div className="DashboardArea">
      <div className="container">
        <div className="header">
          <Heading text={`Welcome ${user?.name.split(' ')[0]}`} />
          <div className="header__actions">
            <button className="btn">
              <HiPlus size={16} className="btn-icon" />
              New Project
            </button>
          </div>
        </div>

        {projects &&
          (projects.length > 0 ? (
            <div className="cards">
              {projects.map(({ _id, name, description, connected }) => (
                <div className="card shadow" key={_id}>
                  <div className="card-title">{name}</div>
                  <div className="card-description">{description}</div>
                  <div className="card-tags">
                    {connected.includes('mongoDB') && (
                      <div className="tag">
                        <Image src={mongoWhite} alt="Mongo logo" />
                      </div>
                    )}
                  </div>
                  <div
                    className="card-link"
                    onClick={() => router.push(`/project/${_id}`)}
                  >
                    <div className="text">
                      <span>View</span>
                    </div>
                    <div className="icon">
                      <Image src={SVG_arrow} alt="Arrow icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="info-message">No Projects Made</div>
          ))}
      </div>
    </div>
  );
};

export default DashboardArea;
