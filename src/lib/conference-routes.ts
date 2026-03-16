export const conferenceRoutes = {
    baseUrl: "https://ehs-ckm-conference.com/backend/public/api/v1",
    account: {
      register: "/user/account/register",
      login: "/user/account/login",
      profile: "/user/account/profile",
      stripe: "/user/account/stripe/create-payment-intent",
    },  
    confrence :{
        pre:"user/preconference/workshops"
        
    }
  };