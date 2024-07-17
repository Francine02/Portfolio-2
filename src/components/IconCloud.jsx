import Icon from "../@/components/magicui/icon-cloud.jsx";

const slugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "bootstrap",
  "springboot",
  "mysql",

];

export function IconCloud() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background sm:px-20 lg:px-5 xl:px-20">
      <Icon iconSlugs={slugs} />
    </div>
  );
}
