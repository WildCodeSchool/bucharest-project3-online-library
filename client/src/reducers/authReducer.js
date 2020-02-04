export default function(state = {}, action) {
    switch(action.type) {
        case "CREATE_SESSION":
            return { ...state,
                token: action.token,
                id: action.id,
                email: action.email,
                password: action.password,
                firstname: action.firstname,
                lastname: action.lastname,
                volunteering_county: action.volunteering_county,
                volunteering_center: action.volunteering_center,
                contract_number: action.contract_number,
                date_joined: action.date_joined,
                phonenumber: action.phonenumber,
                access_level: action.access_level
            }
        default: 
            return state;
    }
}