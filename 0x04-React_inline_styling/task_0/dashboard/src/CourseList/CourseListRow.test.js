import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  describe("when isHeader is true", () => {
    it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
      const wrapper = shallow(
        <CourseListRow textFirstCell="Header" isHeader />
      );
      const cell = wrapper.find("th");

      expect(cell).toHaveLength(1);
      expect(cell.prop("colSpan")).toEqual(2);
      expect(cell.text()).toEqual("Header");
    });

    it("renders two cells when textSecondCell is present", () => {
      const wrapper = shallow(
        <CourseListRow
          textFirstCell="Header 1"
          textSecondCell="Header 2"
          isHeader
        />
      );
      const cells = wrapper.find("th");

      expect(cells).toHaveLength(2);
      expect(cells.at(0).text()).toEqual("Header 1");
      expect(cells.at(1).text()).toEqual("Header 2");
    });
  });

  describe("when isHeader is false", () => {
    it("renders correctly two td elements within a tr element", () => {
      const wrapper = shallow(
        <CourseListRow
          textFirstCell="Cell 1"
          textSecondCell="Cell 2"
          isHeader={false}
        />
      );
      const row = wrapper.find("tr");
      const cells = row.find("td");

      expect(row).toHaveLength(1);
      expect(cells).toHaveLength(2);
      expect(cells.at(0).text()).toEqual("Cell 1");
      expect(cells.at(1).text()).toEqual("Cell 2");
    });
  });
});
