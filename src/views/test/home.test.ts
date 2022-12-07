import { describe, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

import Home from "../HomeView.vue";

describe("HomePage.vue", () => {
  const wrapper = shallowMount(Home);

  it("should render correct contents", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render H1 that contains Home Page text", () => {
    expect(wrapper.find("h1").text()).toBe("Home Page");
  });

  it("should the counter element start with zero", () => {
    expect(wrapper.find(".counter").text()).toBe("0");
  });

  it("should the counter element increment by one when the button is clicked", async () => {
    await wrapper.find(".increment").trigger("click");
    expect(wrapper.find(".counter").text()).toBe("1");
  });

  it("should the counter element decrement by one when the button is clicked", async () => {
    await wrapper.find(".decrement").trigger("click");
    expect(wrapper.find(".counter").text()).toBe("0");
  });

  it("should the counter element increment by two when the button is clicked", async () => {
    await wrapper.find(".double-increment").trigger("click");
    expect(wrapper.find(".counter").text()).toBe("2");
  });

  it("should the counter element decrement by two when the button is clicked", async () => {
    await wrapper.find(".double-decrement").trigger("click");
    expect(wrapper.find(".counter").text()).toBe("0");
  });
});
