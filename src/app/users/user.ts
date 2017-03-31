
//map user model from your REST app.
export class User{
      last_login: any;
      date_joined:any;
      first_name:string;
      last_name:string;
      phone_number:any;
      email:string;
      is_email_verified:boolean;
      is_phone_number_verified:boolean;
      is_active:boolean;
      is_superuser:boolean;
      is_staff:boolean;
      password:string;
      created_by:string;

      permissions:any;
      //user_type:any;
      id:any;

     //for password change 
     old_password:any;
     new_password:any;
     new_password_again:any;
     
    
    
    }

/*export class UserType{
  constructor( public id:number,public name:string){}
}*/
