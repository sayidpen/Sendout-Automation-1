
import {Visit_URL} from '../../Pages/Browser_Capability'
const Visit = new Visit_URL();

describe('Sendout.AI browser capability testing', () => {
    it('Browser Capability Testing - TC001', () => {
        Visit.Visit_Url('https://app.sendout.ai/login')
    })
})