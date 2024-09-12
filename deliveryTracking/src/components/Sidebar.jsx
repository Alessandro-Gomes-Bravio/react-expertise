import { FaHome, FaEnvelope, FaShoppingCart, FaCog } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
      <div className="Sidebar">
        <div className="iconWrapper">
          <FaHome className="icon" />
        </div>
        <div className="iconWrapper">
          <FaEnvelope className="icon" />
        </div>
        <div className="iconWrapper">
          <FaShoppingCart className="icon" />
        </div>
        <div className="iconWrapper">
          <FaCog className="icon" />
        </div>
      </div>
    );
  };

export default Sidebar;