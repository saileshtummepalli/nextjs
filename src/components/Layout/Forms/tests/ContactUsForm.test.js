import ContactUsForm from "../ContactUsForm";
import { shallow} from "enzyme";
import toJson from "enzyme-to-json";
import { act } from "react-dom/test-utils";

describe('<ContactUsForm />',()=>{
    it('should mount the component',async()=>{
        let wapper;
        await act(async()=>{
            wapper = shallow(<ContactUsForm />);
        });
        expect(toJson(wapper)).toMatchSnapshot();
    })
})