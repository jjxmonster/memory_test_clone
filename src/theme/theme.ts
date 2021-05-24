interface Theme {
   colors: {
      grey: {
         normal: String;
      };
      green: {
         normal: String;
      };
      purple: {
         normal: String;
         dark: String;
      };
      pink: {
         normal: String;
      };
   };
}

export const theme: Theme = {
   colors: {
      grey: {
         normal: '#2b2634',
      },
      green: {
         normal: '#46c252',
      },
      purple: {
         normal: '#8b78a4',
         dark: '#4e435b',
      },
      pink: {
         normal: '#d74975',
      },
   },
};
