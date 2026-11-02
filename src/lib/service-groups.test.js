import { describe, expect, test } from "bun:test";
import { serviceGroups, serviceContactPath } from "./service-groups";

describe("service navigation", () => {
  test("home links have the four required section destinations", () => {
    expect(serviceGroups.map((group) => group.id)).toEqual([
      "pharma-advisory", "ma-transactions", "market-entry", "fractional-partner",
    ]);
  });
  test("the selected service is carried to the contact form", () => {
    const path = serviceContactPath("Mergers & Acquisitions");
    expect(path.split("?")[0]).toBe("/contact");
    expect(new URLSearchParams(path.split("?")[1]).get("service")).toBe("Mergers & Acquisitions");
  });
});
