import BarGraph from "../BarGraph/BarGraph";
import CardDetails from "../CardDetails/CardDetails";

export default function BarGraphCardList({
  informationList,
  dsn,
  typeColumns,
  profile,
}) {
  return (
    <>
      {informationList?.map((column, index) => (
        <CardDetails
          path={`/profile/detail/${column.toLowerCase()}`}
          state={{ dsn: dsn }}
          title={typeColumns[column].title}
          description={typeColumns[column].description}
          key={index}
        >
          <BarGraph
            inputs={typeColumns[column]?.inputs(profile[column])}
            keys={typeColumns[column].keys}
            bottom={typeColumns[column].bottom}
            indexBy={typeColumns[column].indexBy}
            left={typeColumns[column].left}
          />
        </CardDetails>
      ))}
    </>
  );
}
