import { Container, MediaIcon } from "components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <footer>
        <div className="flex my-8 justify-center">
          <MediaIcon
            icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://github.com/daveterry67"
            className="mr-4"
          />
          <MediaIcon
            icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://www.linkedin.com/in/daviddappa/"
            className="mr-4"
          />
          <MediaIcon
            icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://twitter.com/daveterry76"
            className="mr-4"
          />
        </div>
      </footer>
    </Container>
  );
};
