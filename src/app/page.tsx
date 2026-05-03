import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat - Nexa',
  description: 'Chat with the internet, chat with Nexa.',
};

const Home = () => {
  return <ChatWindow />;
};

export default Home;
