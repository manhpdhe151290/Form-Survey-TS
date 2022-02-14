export  interface UserInfo {
 
    user: {
        score: number;
        role: string;
        isEmailVerifie: boolean;
        avatar: string;
        username: string;
        email: string;
        id: string;
      };
      tokens: {
        access: {
          token: string;
          expires: string;
        };
        refresh: {
          token: string;
          expires: string;
        }
      }
   
}
