import { motion } from "framer-motion";
import { useEffect, useState, memo } from "react";

// SVG Logo Components
const ReactLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#61DAFB">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12,15.5A7.5,7.5 0 0,1 4.5,8H3.5A8.5,8.5 0 0,0 12,16.5M12,8.5A7.5,7.5 0 0,1 19.5,16H20.5A8.5,8.5 0 0,0 12,7.5"/>
    <path d="M12,8.5A8.5,8.5 0 0,0 3.5,17H4.5A7.5,7.5 0 0,1 12,9.5M12,15.5A8.5,8.5 0 0,0 20.5,7H19.5A7.5,7.5 0 0,1 12,14.5"/>
  </svg>
);

const JSLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F7DF1E">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M18.5 10.5c0 1.5-1 2.5-2.5 2.5s-2.5-1-2.5-2.5h1.5c0 .5.5 1 1 1s1-.5 1-1v-5h1.5v5zm-6 3c-1.5 0-2.5-1-2.5-2.5h1.5c0 .5.5 1 1 1s1-.5 1-1-.5-1-1-1h-1v-1.5h1c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5z" fill="#000"/>
  </svg>
);

const TSLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#3178C6">
    <rect width="24" height="24" fill="#3178C6"/>
    <path d="M9 7v1H7v8H6V8H4V7h5zm4.5 0c1.5 0 2.5 1 2.5 2.5v1c0 1-.5 1.5-1 1.5 1 0 1.5.5 1.5 1.5v1.5c0 1.5-1 2-2.5 2H11V7h2.5zm-1 4.5h1c.5 0 1-.5 1-1v-1c0-.5-.5-1-1-1h-1v3zm0 4h1c.5 0 1-.5 1-1v-1.5c0-.5-.5-1-1-1h-1v3.5z" fill="#FFF"/>
  </svg>
);

const PHPLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#777BB4">
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="#777BB4"/>
    <path d="M4 9h2c1 0 1.5.5 1.5 1.5S7 12 6 12H5v2H4V9zm1 2h1c.5 0 .5-.5.5-1S6.5 10 6 10H5v1zm4-2h2c1 0 1.5.5 1.5 1.5S12 12 11 12h-1v2H9V9zm1 2h1c.5 0 .5-.5.5-1S11.5 10 11 10h-1v1zm5-2h1v2h1c1 0 1.5.5 1.5 1.5S18 14 17 14h-2V9zm1 4h1c.5 0 .5-.5.5-1s0-1-.5-1h-1v2z" fill="#FFF"/>
  </svg>
);

const PythonLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#3776AB">
    <path d="M12 1c-1.5 0-3 0-4 1S6 4 6 5.5V8h6v1H6c-1.5 0-3 1-3 2.5s1.5 2.5 3 2.5h2v-2c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5v-4c0-1.5-1-2.5-2.5-2.5H12zm-2 3c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"/>
    <path d="M12 23c1.5 0 3 0 4-1s2-2 2-3.5V16h-6v-1h6c1.5 0 3-1 3-2.5S19.5 10 18 10h-2v2c0 1.5-1 2.5-2.5 2.5h-5C7 14.5 6 15.5 6 17v4c0 1.5 1 2.5 2.5 2.5H12zm2-3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" fill="#FFD43B"/>
  </svg>
);

const GitLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#F05032">
    <path d="M23.15 12.75 12.75.35a1.2 1.2 0 0 0-1.7 0L8.8 2.6l2.5 2.5a1.43 1.43 0 0 1 1.8 1.8l2.4 2.4a1.43 1.43 0 0 1 1.5 2.4 1.43 1.43 0 0 1-2.4-1 1.43 1.43 0 0 1 0-1.5L12.2 7.8v6.35a1.43 1.43 0 0 1 .4 2.85 1.43 1.43 0 0 1-1.4-2.4 1.43 1.43 0 0 1 .6-.55V7.65a1.43 1.43 0 0 1-.8-1.9L8.5 3.25.85 10.9a1.2 1.2 0 0 0 0 1.7l10.4 10.4a1.2 1.2 0 0 0 1.7 0l10.4-10.4a1.2 1.2 0 0 0-.24-1.85z"/>
  </svg>
);

const CSharpLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#239120">
    <circle cx="12" cy="12" r="10" fill="#239120"/>
    <path d="M8 8c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5h-1.5c0 .5-.5 1-1 1s-1-.5-1-1v-3c0-.5.5-1 1-1s1 .5 1 1H10.5C10.5 9 9.5 8 8 8zm6 2v1h1v1h-1v1h1v1h-1v1h-1v-1h-1v-1h1v-1h-1V11h1v-1h1z" fill="#FFF"/>
  </svg>
);

const CPPLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#00599C">
    <circle cx="12" cy="12" r="10" fill="#00599C"/>
    <path d="M6 8c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5H7c0 .5-.5 1-1 1s-1-.5-1-1v-3c0-.5.5-1 1-1s1 .5 1 1h1.5C8.5 9 7.5 8 6 8zm5 2v1h1v1h-1v1h1v1h-1v1h-1v-1h-1v-1h1v-1h-1V11h1v-1h1zm3 0v1h1v1h-1v1h1v1h-1v1h-1v-1h-1v-1h1v-1h-1V11h1v-1h1z" fill="#FFF"/>
  </svg>
);

const JavaLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#ED8B00">
    <path d="M8.5 18c.5.5 1.5.5 2.5.5s2-.5 2.5-1c.5-.5.5-1.5 0-2s-1.5-.5-2.5-.5-2 .5-2.5 1-.5 1.5 0 2zm0-4c.5.5 1.5.5 2.5.5s2-.5 2.5-1c.5-.5.5-1.5 0-2s-1.5-.5-2.5-.5-2 .5-2.5 1-.5 1.5 0 2zm4-6c-.5-.5-1-.5-1.5-.5s-1 0-1.5.5c-.5.5-.5 1 0 1.5s1 .5 1.5.5 1 0 1.5-.5.5-1 0-1.5zm-2-3c-1 0-2 .5-2.5 1.5s0 2 1 2.5c1 .5 2 0 2.5-1s0-2-1-2.5z"/>
  </svg>
);

const MySQLLogo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#4479A1">
    <path d="M16.5 8c-1 0-2 .5-2.5 1.5-.5-1-1.5-1.5-2.5-1.5s-2 .5-2.5 1.5C8.5 8.5 7.5 8 6.5 8 4.5 8 3 9.5 3 11.5v5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-2c0-.5.5-1 1-1s1 .5 1 1v2c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-5C21 9.5 19.5 8 16.5 8z"/>
  </svg>
);

const logos = [
  { Component: ReactLogo, name: "React" },
  { Component: JSLogo, name: "JavaScript" },
  { Component: TSLogo, name: "TypeScript" },
  { Component: PHPLogo, name: "PHP" },
  { Component: PythonLogo, name: "Python" },
  { Component: GitLogo, name: "Git" },
  { Component: CSharpLogo, name: "C#" },
  { Component: CPPLogo, name: "C++" },
  { Component: JavaLogo, name: "Java" },
  { Component: MySQLLogo, name: "MySQL" },
];

export const FloatingLogos = memo(() => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoElements = Array.from({ length: 20 }, (_, i) => {
    const logoIndex = i % logos.length;
    const { Component, name } = logos[logoIndex];
    const size = Math.random() * 20 + 15; // Random size between 15-35px
    
    return (
      <motion.div
        key={`${name}-${i}`}
        className="absolute opacity-20 dark:opacity-30"
        initial={{
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
        }}
        animate={{
          x: [
            Math.random() * dimensions.width,
            Math.random() * dimensions.width,
            Math.random() * dimensions.width,
          ],
          y: [
            Math.random() * dimensions.height,
            Math.random() * dimensions.height,
            Math.random() * dimensions.height,
          ],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 3,
        }}
        whileHover={{ 
          scale: 1.5, 
          opacity: 0.8,
          transition: { duration: 0.3 }
        }}
      >
        <Component size={size} />
      </motion.div>
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {logoElements}
    </div>
  );
});
