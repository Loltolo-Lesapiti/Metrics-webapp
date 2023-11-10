import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer
      variant="gradient"
      color="blue-gray"
      className="sticky bottom-0 z-10 w-full mt-6 border-t border-blue-gray-50 py-6"
    >
      <Typography color="blue-gray" className="font-normal text-center">
        &copy; 2023 Taas Forex
      </Typography>
    </footer>
  );
}

export default Footer;
