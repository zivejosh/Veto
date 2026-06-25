import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const FeedIcon = ({ color, size }: { color: string, size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M4 6h16M4 12h16M4 18h16" />
  </Svg>
);

export const SocialIcon = ({ color, size }: { color: string, size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <Path d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
    <Path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Svg>
);

export const CreateIcon = ({ color, size }: { color: string, size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <Path d="M12 8v8" />
    <Path d="M8 12h8" />
  </Svg>
);

export const ProfileIcon = ({ color, size }: { color: string, size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <Path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
  </Svg>
);

export const SettingsIcon = ({ color, size }: { color: string, size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Path d="M19.14 12.86a2 2 0 0 1 0-1.72l.78-1.79a2 2 0 0 0-.78-2.65l-1.5-1.5a2 2 0 0 0-2.65-.78l-1.79.78a2 2 0 0 1-1.72 0L9.14 3.4a2 2 0 0 0-2.65.78L5 5.68a2 2 0 0 0-.78 2.65l.78 1.79a2 2 0 0 1 0 1.72l-.78 1.79a2 2 0 0 0 .78 2.65l1.5 1.5a2 2 0 0 0 2.65.78l1.79-.78a2 2 0 0 1 1.72 0l1.79.78a2 2 0 0 0 2.65-.78l1.5-1.5a2 2 0 0 0 .78-2.65l-.78-1.79z" />
    <Path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </Svg>
);
