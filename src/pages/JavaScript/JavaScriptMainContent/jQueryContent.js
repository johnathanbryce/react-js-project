import ContentCard from "../../../components/UI/ContentCard";

const JQueryContent = () => {
  return (
    <div>
      <ContentCard
        contentTitle="jQuery"
        video="https://www.youtube.com/embed/O6P86uwfdR0"
        externalLink="https://api.jquery.com/"
        content={
          <div>
            <p> jQuery Content </p>
          </div>
        }
      />
    </div>
  );
};

export default JQueryContent;
