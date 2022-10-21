import axios from "axios"
import { url,fetchCurrencies } from "../Redux/forexslice"

jest.mock("axios");

describe("fetchCurrencies", () => {
    describe("when API call is successful", () => {
      it("should return currencies", async () => {
        const currencies = [
            {
                "ticker" : "EUR/USD",
                "bid" : "0.97976",
                "ask" : "0.97976",
                "open" : "0.97861",
                "low" : "0.97049",
                "high" : "0.98171",
                "changes" : 0.001175136162516206,
                "date" : "2022-10-21 10:21:39"
              }, {
                "ticker" : "USD/JPY",
                "bid" : "151.330",
                "ask" : "151.330",
                "open" : "150.152",
                "low" : "150.034",
                "high" : "151.947",
                "changes" : 0.007845383344877364,
                "date" : "2022-10-21 10:21:39"
              }
        ];
        axios.get.mockResolvedValueOnce(currencies);
  
     
        const result = await fetchCurrencies();
  
       
        expect(axios.get).toHaveBeenCalledWith(`${url}`);
        expect(result).toEqual(currencies);
      });
    });

    describe("When it fails to fetch data", () => {
        it("should return empty currencies list", async () => {
          
          const message = "Network Error";
          axios.get.mockRejectedValueOnce(new Error(message));
    
          const result = await fetchCurrencies();
    
          expect(axios.get).toHaveBeenCalledWith(`${url}`);
          expect(result).toEqual([]);
        });
      });
    });
  