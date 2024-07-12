import { Typography } from "../ui/typography";

export const Footer = () => {
  return (
    <footer className="w-full pt-10 border-t border-card">
      <div className="w-full max-w-3xl px-2 py-4 m-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between"></div>
        <div className="flex flex-col items-center justify-center w-full">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Made with ❤️ by ChampagneDev
            Créations
          </Typography>
          <Typography variant="base" className="text-xs text-muted-foreground">
            Siège social - 60 rue François 1er - 75008 Paris.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
