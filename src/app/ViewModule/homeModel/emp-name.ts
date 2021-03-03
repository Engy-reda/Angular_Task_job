export interface EmpName {
    empName:string,
    designation:string,
    joinDate:string,
    email:string,
    phoneNumber:string,
    skillInfo:[
        {
            phoneNumber:string,
            skillRating:string
        }
    ],
    eductionInfo:[
        {
            instituteName:string,
            courseName:string,
            completedYear:string
        }
    ]
}
   
