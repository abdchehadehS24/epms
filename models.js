mongoose-gen -m user_group -f group_name:string -r
mongoose-gen -m user -f username:string,password:string,email:string,isAdmin:boolean,role:objectId:'user_group' -r
mongoose-gen -m patient -f UniqueID:string,first_name:string,last_name:string,dob:date,age_at_registration:number,gender:string -r
mongoose-gen -m assessment_type -f assessment_type_description -r
mongoose-gen -m assessment -f assessment_typeId:objectId:'assessment_type',patientId:objectId:'patient',assessment_date:date,is_IDP:boolean,is_refugee:boolean,is_patient_registrar:boolean,registrarId:objectId:'user',email:string,cell_number:string,occupation:string -r