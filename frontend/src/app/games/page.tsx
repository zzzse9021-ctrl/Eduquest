import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { VideoOff } from 'lucide-react';

// Every game window gets the same 16:9 frame; videos with other aspect
// ratios are letterboxed inside it instead of changing the window's size.
const windowStyle: React.CSSProperties = {
  display: 'block',
  width: '75%',
  maxWidth: '576px',
};

const videoStyle: React.CSSProperties = {
  width: '100%',
  aspectRatio: '16 / 9',
  objectFit: 'contain',
  backgroundColor: 'black',
  borderRadius: '8px',
};

export default function MediaCover() {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginTop: '50px',
        }}
      >
        {/* Video Links */}
        <Link href="/games/formula_1" passHref style={windowStyle}>
          <video style={videoStyle} controls>
            <source src="/formula1/formula.mp4" />
          </video>
        </Link>

        <Link href="/games/mapQuest" passHref style={windowStyle}>
          <video style={videoStyle} controls>
            <source src="/mapQuest_images/mapquest_demo.mp4" />
          </video>
        </Link>
        <Link href="/games/wordQuest" style={windowStyle}>
          <video style={videoStyle}>
            <source src="/wordQuest.mp4"></source>
          </video>
        </Link>
        <Link href="/games/spelling" style={windowStyle}>
          <video style={videoStyle}>
            <source src="/spell.mp4"></source>
          </video>
        </Link>
      </div>
    </div>
  );
}
