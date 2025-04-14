import Icon from "./magicui/icon-cloud.jsx";

const slugs = [
  "javascript",
  "java",
  "react",
  "typescript",
  "html5",
  "css3",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "bootstrap",
  "springboot",
  "mysql",
  "postgresql",
  "mongodb", 
];

export function IconCloud() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background sm:px-20 lg:px-5 xl:px-20 2xl:px-36">
      <Icon iconSlugs={slugs} />
    </div>
  );
}
