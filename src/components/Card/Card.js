import LineGraph from "../LineGraph/LineGraph";
import CardDetails from "../CardDetails/CardDetails";

export default function Card({ name, platform, dsn, error }) {
  const LineGraphProps = {
    data: error,
  };

  const CardDetailsProps = {
    path: `/project/detail/${dsn}`,
    title: name,
    subTitle: platform,
    description: "If you want to see details, Click here!",
    children: <LineGraph {...LineGraphProps} />,
  };

  return <CardDetails {...CardDetailsProps} />;
}
