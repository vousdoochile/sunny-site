import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Sunny Texts | Daily check-ins for older adults',
  description: 'Sunny Texts sends cheerful daily texts for older adults and optional caregiver alerts for families.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
