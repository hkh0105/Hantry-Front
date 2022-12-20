import BarGraph from "../BarGraph/BarGraph";
import LineGraph from "../LineGraph/LineGraph";
import Dropdown from "../Dropdown/Dropdown";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper";

import { GrpahTimeList } from "../../constants";
import Loadable from "../Loadable/Loadable";
import useUserError from "../../hooks/useUserError";
import useGraphFilter from "../../hooks/useGraphFilter";

export default function GraphContainer({ dsn }) {
  const { allErrors } = useUserError(dsn);
  const { graphData, timeFilterButtonHandler } = useGraphFilter(allErrors);

  return (
    <Loadable>
      <WhiteWrapper title={"Graph"}>
        <Dropdown
          optionList={GrpahTimeList}
          defaultValue={"All"}
          onChange={timeFilterButtonHandler}
        />
        <div className="chart-container">
          <BarGraph
            inputs={graphData}
            keys={["count"]}
            bottom="Type"
            indexBy="type"
            left="Count"
          />
        </div>
        <div className="chart-container">
          <LineGraph errors={allErrors} />
        </div>
      </WhiteWrapper>
    </Loadable>
  );
}
