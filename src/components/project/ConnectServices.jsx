import { useState } from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import MongoColor from '../../assets/icons/mongo-color.svg';
import PostgresColor from '../../assets/icons/postgres-color.svg';
import ExcelColor from '../../assets/icons/excel-color.svg';
import SheetsColor from '../../assets/icons/sheets-color.svg';
import CSVColor from '../../assets/icons/csv-color.svg';

import MongoModal from '../project/modals/MongoModal';
import PostgresModal from '../project/modals/PostgresModal';

const ConnectServices = ({ nextTab }) => {
  const [mongoModalOpen, setMongoModalOpen] = useState(false);
  const [postgresModalOpen, setPostgresModalOpen] = useState(false);

  return (
    <main className="ConnectServices">
      <MongoModal isShown={mongoModalOpen} setIsShown={setMongoModalOpen} />
      <PostgresModal
        isShown={postgresModalOpen}
        setIsShown={setPostgresModalOpen}
      />
      <div className="heading">Connect Services To Project</div>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique esse
        facilis cupiditate necessitatibus libero modi ab repudiandae, iure cum
        temporibus!
      </div>
      <div className="services">
        <div className="cards">
          <div className="card shadow" onClick={() => setMongoModalOpen(true)}>
            <Image src={MongoColor} alt="mongo logo" />
            <FiExternalLink size={18} />
          </div>
          <div
            className="card shadow"
            onClick={() => setPostgresModalOpen(true)}
          >
            <Image src={PostgresColor} alt="mongo logo" />
            <FiExternalLink size={18} />
          </div>
          <div className="card shadow">
            <Image src={ExcelColor} alt="mongo logo" />
            <FiExternalLink size={18} />
          </div>
          <div className="card shadow">
            <Image src={SheetsColor} alt="mongo logo" />
            <FiExternalLink size={18} />
          </div>
          <div className="card shadow">
            <Image src={CSVColor} alt="mongo logo" />
            <FiExternalLink size={18} />
          </div>
        </div>
        <button className="next accent" onClick={nextTab}>Next</button>
      </div>
    </main>
  );
};
//!TODO a next button needed to go to redefine data step

export default ConnectServices;
