import mockAxios from "axios";

import getProducts from "../FetchAPI";

it("calls for products", () => {
  mockAxios.get.mockImlementationOnnce(() =>
    Promise.resolve({ data: { results: ["cute.jpg"] } })
  );

  const card = getProducts();
});
