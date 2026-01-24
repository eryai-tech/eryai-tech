import './globals.css';

export const metadata = {
  title: 'Ery AI – AI-drevet kundeservice som faktisk fungerer',
  description: '90% av supporthenvendelser er repeterende støy. Vi automatiserer dem – på svensk, norsk, dansk – så teamet ditt kan fokusere på det som faktisk krever mennesker.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
