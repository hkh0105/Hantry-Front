import React from "react";
import * as Redux from "react-redux";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProjectList from "../components/ProjectList/ProjectList";
import store from "../store/index";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual("react-redux"),
}));

let useSelectorMock;
let useDispatchMock;

useSelectorMock = jest.spyOn(Redux, "useSelector");
useDispatchMock = jest.spyOn(Redux, "useDispatch");

useSelectorMock.mockReturnValue({});
useDispatchMock.mockReturnValue(jest.fn());

Enzyme.configure({ adapter: new Adapter() });

describe("<ProjectList />", () => {
  let wrapper;
  let initialProps;

  beforeEach(() => {
    initialProps = {
      jwtoken: "jwtoken",
      projectList: [{ token: 1 }, { token: 2 }],
      totalProjectsLength: 2,
      onProjectCreate: jest.fn(),
      onProjectListLoad: jest.fn(),
    };
    wrapper = shallow(
      <Provider store={store}>
        <ProjectList {...initialProps} />
      </Provider>,
    );
  });

  it("renders ProjectList Componet", () => {
    expect(wrapper.find(".project-card-form")).toHaveLength(0);

    expect(wrapper.find(".card-container")).toHaveLength(
      initialProps.projectList.length,
    );
    expect(wrapper.find(".title").text()).toHaveLength(
      initialProps.projectList.length,
    );
    expect(wrapper.find(".card-title")).toHaveLength(
      initialProps.projectList.length,
    );
    expect(wrapper.find(".card-text").text()).toEqual(
      "If you want to see details, Click here",
    );
    expect(wrapper.find(".title")).toHaveLength(
      initialProps.projectList.length,
    );
    expect(wrapper.find(".chart-container")).toHaveLength(
      initialProps.projectList.length,
    );
  });
  it("renders loadingbar if projectList is an empty array", () => {
    wrapper = shallow(<ProjectList {...initialProps} projectList={[]} />);
    expect(wrapper.find(".Loading-container")).toHaveLength(0);
  });
  it("click create button", () => {
    wrapper = shallow(<ProjectList {...initialProps} projectList={[]} />);
    expect(wrapper.find(".Loading-container")).toHaveLength(0);
  });
});
