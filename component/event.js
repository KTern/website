import * as Amplitude from '@amplitude/node';

export default function Event(e_data){
    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
      
      
    console.log("Events",e_data)
    const data={
        event_type:e_data.event_name,
        user_id:uuidv4(),
        user_properties:{
            email:"uuid@gmail.com",
            name:'uuid',
            customerPhase:`${e_data.customer_phase}`,
            partnerPhase:`${e_data.partner_phase}`,
            customerScore:`${e_data.customer_score}`,
            partnerScore:`${e_data.partner_score}`,
            maps:`${e_data.maps}`,
            projects:`${e_data.projects}`,
            process:`${e_data.process}`,
            labs:`${e_data.labs}`,
            mines:`${e_data.mines}`,
            aggregateScore:`${e_data.interest_score}`
        },
        event_properties:{
            keyString:`${e_data }`,
            		keyInt: 11,
            		keyBool: true,
            pageSource:`${e_data.page_source}`,
            sectionName:`${e_data.name}`,
            eventName:`${e_data.event_name}`,
            label:`${e_data.label}`
        }
    }
    const AMPLITUDE_KEY = 'fc34969fbb47436070b100efc94f9efa';
var client = Amplitude.init(AMPLITUDE_KEY);
console.log(data)
client.logEvent(data);
client.flush();
}