create TABLE users (
   id_User  int primary key, 
   firstName varchar(100),
   LastName  varchar(100),
   Email     varchar(100),
   Date_Birth  date,
   hobby   varchar(40),
   create_AT datetime DEFAULT CURRENT_TIMESTAMP(),
   Rolse  enum("admin","user")
);

create table activity (
   Id_Activity int primary key, 
   colories  int, 
   DATES   date, 
   start_Time datetime, 
   End_Time  datetime, 
   Type_Activity varchar(100),
   id_User int references users
);

create table Activity_group(
  Group_ACTIV int primary key, 
  dates  date,
  Time  datetime, 
  Location varchar(100), 
  Discriptions varchar(500)
);

create table Active_Group_USER(
  primary key(id_User,Group_ACTIV),
  id_User int references users, 
  Group_ACTIV int references Activity_group
);
