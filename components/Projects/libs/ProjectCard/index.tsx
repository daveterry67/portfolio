import { MediaIcon } from "components";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


interface Props {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  externalLink: string;
  githubLink: string;
  imageLink: string;
}

const arrayToString = (array: string[]) => {
  // Check if the array is empty.
  if (array.length === 0) {
    return "";
  }

  // Join the elements of the array into a single string, separated by commas.
  return array.join(", ");
};

export const ProjectCard = ({
  title,
  subtitle,
  description,
  technologies,
  externalLink,
  githubLink,
  imageLink,
}: Props) => {
  return (
    <div className="border max-w-xs w-full h-64 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden dark:border-gray-700">
      <div className="w-full h-full relative bg-cover bg-center">
        <img
          className="w-full h-full transition-transform transform hover:opacity-0 object-fill"
          src={imageLink}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col p-4 gap-2 justify-between opacity-0 bg-black bg-opacity-80 hover:opacity-90 transition-opacity hover:bg-darkTheme text-white-900">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-medium text-sm">{subtitle}</p>
          </div>
          <p className="text-sm">{description}</p>
          <div className="flex flex-col text-sm gap-2">
            <p>{arrayToString(technologies)}</p>
            <div className="flex gap-2">
              <MediaIcon
                icon={<FaGithub className="w-6 h-6 text-white-900" />}
                href={githubLink}
                className="mr-4"
              />
              <MediaIcon
                icon={
                  <FiExternalLink className="w-6 h-6 text-white-900" />
                }
                href={externalLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
