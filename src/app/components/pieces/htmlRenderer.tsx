import parse from 'html-react-parser';

interface HtmlRendererProps {
  htmlString: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString }) => {
  return <>{parse(htmlString)}</>;
};

export default HtmlRenderer;
