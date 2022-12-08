import LineGraph from "../LineGraph/LineGraph";
import CardDetails from "../CardDetails/CardDetails";

export default function Card({ cardData }) {
  const { name, platform, dsn, error } = cardData;

  return (
    <CardDetails
      path={`/project_detail/${dsn}`}
      title={name}
      subTitle={platform}
      description={"If you want to see details, Click here!"}
    >
      <LineGraph data={error}></LineGraph>
    </CardDetails>
  );
}
