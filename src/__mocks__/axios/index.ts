const axios: any = jest.genMockFromModule("axios");
import { mockUserSearchPayload, mockUserPayload, mockEmptySearchPayload } from "./mockData";

axios.get = jest.fn().mockImplementation((url: string) => {
    switch (url) {
        case "https://api.github.com/search/users?q=user:dijiadeyemo+language:javascript":
            return mockUserSearchPayload;
        case "https://api.github.com/search/users?q=user:dijiadeyemo+language:java":
            return mockEmptySearchPayload;
        case "https://api.github.com/search/users?q=user:dijiadeyemo+language:ruby":
            throw { message: "timeout", code: "ECONNABORTED" };
        case "https://api.github.com/users/dijiadeyemo":
            return mockUserPayload[0];
        default:
            throw new Error("Not found");
    }
});

export default axios;