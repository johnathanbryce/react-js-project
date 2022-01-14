import ContentCard from "../../../components/UI/ContentCard";

const DOMContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="The DOM"
        video=""
        externalLink=""
        content={
          <div>
            <p> DOM Content </p>
          </div>
        }
      />
    </div>
  );
};

export default DOMContent;
