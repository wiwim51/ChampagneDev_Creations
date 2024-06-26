import { Typography } from "../ui/typography";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-card">
      <div className="w-full max-w-3xl px-2 py-4 m-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between"></div>
        <div className="flex items-center justify-center w-full">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Made with ❤️ by ChampagneDev
            Créations
          </Typography>
        </div>
      </div>
    </footer>
  );
};
