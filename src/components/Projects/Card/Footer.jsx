export function Footer({ githubUrl, siteUrl }) {
  return (
    <footer className="mt-auto pt-4 flex justify-end gap-5">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="button-outlined"
      >
        Github
      </a>
      {siteUrl && (
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-base px-6"
        >
          Site
        </a>
      )}
    </footer>
  );
}
