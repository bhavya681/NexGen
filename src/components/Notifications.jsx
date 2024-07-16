import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
  const notify = (message) => {
    toast(message);
  };

  return { notify };
};

export default Notifications;
