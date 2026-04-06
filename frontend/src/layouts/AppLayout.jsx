import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PromoPopup from '../components/PromoPopup';
import LiveChatWidget from '../components/LiveChatWidget';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 pt-24 pb-12">
        <Outlet />
      </main>
      <PromoPopup />
      <LiveChatWidget />
    </>
  );
}
