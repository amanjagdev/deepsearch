import Image from 'next/image';
import { useRouter } from 'next/router';
import SVG_Logo from '../assets/logo.svg';
import { useUser } from '../context/auth-context';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';

const Header = () => {
  const router = useRouter();
  const { isAuth, user, logout } = useUser();

  return (
    <div className="Header">
      <div className="container">
        <figure onClick={() => router.push('/')}>
          <Image src={SVG_Logo} alt="Identify Logo" />
        </figure>
      </div>
    </div>
  );
};

export default Header;
